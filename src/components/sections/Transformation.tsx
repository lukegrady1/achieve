import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";
import { TRANSFORMATION, GALLERY } from "@/lib/content";

/**
 * §5.7 — Transformation slider + supporting gym gallery.
 * The slider doubles as the signature interactive element; the gallery gives
 * the section depth even before real before/after pairs are supplied.
 */
export default function Transformation() {
  return (
    <section className="bg-mist py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="eyebrow">— See the work</p>
          <h2 className="mt-3 font-display text-[clamp(40px,7vw,84px)] leading-[0.98]">
            Inside the <span className="text-brand-red">Gym</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            Drag the handle to see the difference coach-led training makes —
            then take a look around the floor.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <BeforeAfterSlider
            before={TRANSFORMATION.before}
            after={TRANSFORMATION.after}
          />
        </Reveal>

        {/* Gym gallery */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
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
  );
}
