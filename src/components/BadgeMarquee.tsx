import { BADGES } from "@/lib/content";

interface BadgeMarqueeProps {
  /** Visual band — dark (black) or light (mist). */
  theme?: "dark" | "mist";
}

/** Small red diamond separating each badge phrase. */
function Diamond() {
  return (
    <span
      aria-hidden
      className="inline-block h-2 w-2 rotate-45 shrink-0 bg-brand-red"
    />
  );
}

/**
 * Auto-scrolling trust strip. Content is duplicated once so the -50% keyframe
 * produces a seamless loop. Pauses on hover for accessibility.
 */
export default function BadgeMarquee({ theme = "dark" }: BadgeMarqueeProps) {
  const isDark = theme === "dark";

  return (
    <section
      aria-label="Why members choose Achieve"
      className={`overflow-hidden border-y py-5 ${
        isDark
          ? "bg-ink-950 border-white/10 text-white"
          : "bg-mist border-black/10 text-ink-900"
      }`}
    >
      <div className="group flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused] motion-reduce:animate-none">
        {/* Duplicate the list twice for a seamless -50% loop. */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex items-center gap-8"
            aria-hidden={copy === 1}
          >
            {BADGES.map((badge) => (
              <li
                key={`${copy}-${badge}`}
                className="flex items-center gap-8 whitespace-nowrap font-display text-[clamp(20px,2.4vw,30px)] tracking-[0.04em]"
              >
                <span>{badge}</span>
                <Diamond />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
