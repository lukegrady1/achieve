"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface SliderImage {
  img: string;
  alt: string;
  label: string;
}

interface BeforeAfterSliderProps {
  before: SliderImage;
  after: SliderImage;
}

/**
 * Transformation wipe slider. The "after" image sits underneath; the "before"
 * image is layered on top and clipped from the right by `pos` percent, so
 * dragging the red handle wipes between the two states.
 * Pointer + touch (pointer events) + keyboard (arrow keys) operable.
 */
export default function BeforeAfterSlider({
  before,
  after,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef<boolean>(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + step));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-card bg-ink-950 shadow-[0_14px_50px_rgba(0,0,0,0.30)] touch-none"
    >
      {/* AFTER — base layer */}
      <Image
        src={after.img}
        alt={after.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1000px"
        className="object-cover"
        priority={false}
      />
      <span className="absolute right-4 top-4 z-10 rounded bg-black/55 px-3 py-1 font-display text-[18px] tracking-[0.06em] text-white">
        {after.label}
      </span>

      {/* BEFORE — clipped overlay */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before.img}
          alt={before.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded bg-brand-red px-3 py-1 font-display text-[18px] tracking-[0.06em] text-white">
          {before.label}
        </span>
      </div>

      {/* Divider + grab handle */}
      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-white"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onKeyDown={handleKeyDown}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-brand-red text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M9 7l-4 5 4 5M15 7l4 5-4 5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
