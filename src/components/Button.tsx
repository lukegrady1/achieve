import Link from "next/link";
import Icon from "@/components/Icon";

export type ButtonVariant = "primary" | "accent" | "ghost" | "ghost-light";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  /** Show the small circular arrow icon inside the pill. */
  withArrow?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center gap-2 font-display font-bold text-[18px] tracking-[0.02em] " +
  "px-6 py-3 rounded-pill transition-[transform,colors,background-color] duration-150 " +
  "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-brand-red focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink-900 text-white hover:bg-ink-950 focus-visible:ring-offset-white",
  accent: "bg-brand-red text-white hover:bg-brand-red2 focus-visible:ring-offset-white",
  ghost:
    "bg-transparent text-ink-900 ring-2 ring-inset ring-ink-900 hover:bg-ink-900 hover:text-white focus-visible:ring-offset-white",
  "ghost-light":
    "bg-transparent text-white ring-2 ring-inset ring-white/70 hover:bg-white hover:text-ink-900 focus-visible:ring-offset-ink-950",
};

export default function Button({
  href,
  variant = "primary",
  children,
  withArrow = false,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-transform duration-150 group-hover:translate-x-0.5">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
