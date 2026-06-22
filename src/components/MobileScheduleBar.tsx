import Link from "next/link";
import { LINKS } from "@/lib/content";

/** On-brand sticky CTA pinned to the bottom on phones only. */
export default function MobileScheduleBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 lg:hidden">
      <Link
        href={LINKS.schedule}
        className="flex items-center justify-center rounded-pill bg-brand-red px-6 py-3.5 font-display text-[20px] tracking-[0.03em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        View Training Schedule
      </Link>
    </div>
  );
}
