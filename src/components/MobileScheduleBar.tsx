"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LINKS } from "@/lib/content";

/**
 * On-brand sticky CTA pinned to the bottom on phones only. It stays hidden over
 * the hero and slides up once the hero section has scrolled out of view.
 */
export default function MobileScheduleBar() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return; // no hero on this page → bar stays hidden

    // Show the bar whenever the hero is NOT intersecting the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <Link
        href={LINKS.schedule}
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        className="flex items-center justify-center rounded-pill bg-brand-red px-6 py-3.5 font-display text-[20px] tracking-[0.03em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        View Training Schedule
      </Link>
    </div>
  );
}
