import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

interface ServiceCardProps {
  title: string;
  blurb: string;
  href: string;
  img: string;
  alt: string;
}

/**
 * Image-topped program card. Desktop: blurb hidden until hover (card lifts).
 * Mobile (< md): blurb always visible for tappability.
 */
export default function ServiceCard({
  title,
  blurb,
  href,
  img,
  alt,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-card overflow-hidden bg-white shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-[clamp(24px,3vw,30px)] leading-[1.1] text-ink-900">
            {title}
          </h3>
          <Icon
            name="arrow"
            className="h-5 w-5 shrink-0 text-brand-red transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>

        {/* Collapsed on desktop, expands on hover; always open below md. */}
        <p className="mt-2 max-h-40 overflow-hidden text-[15px] leading-relaxed text-muted opacity-100 transition-all duration-300 md:mt-0 md:max-h-0 md:opacity-0 md:group-hover:mt-3 md:group-hover:max-h-40 md:group-hover:opacity-100">
          {blurb}
        </p>
      </div>
    </Link>
  );
}
