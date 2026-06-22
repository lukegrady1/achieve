"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms for sequential reveals. */
  delay?: number;
  className?: string;
  /** Render element tag — defaults to div. */
  as?: "div" | "li" | "section";
}

/**
 * Scroll-reveal wrapper. Uses a typed IntersectionObserver to toggle from
 * translate-y-4/opacity-0 to in-place/opaque once. Honors reduced-motion by
 * revealing immediately (the Tailwind motion-reduce variants drop the transform).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced-motion users still get revealed content: the motion-reduce:*
    // utilities below force the visible state regardless of `visible`.
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      // The ref type differs per tag; cast is safe — all are HTMLElements.
      ref={ref as React.Ref<never>}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
