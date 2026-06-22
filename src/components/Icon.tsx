import type { IconName } from "@/lib/content";

interface IconProps {
  name: IconName;
  className?: string;
}

/**
 * Two-tone line icons drawn inline as SVG — no icon-library dependency.
 * `currentColor` drives the stroke so colour is controlled by Tailwind text utilities.
 */
export default function Icon({ name, className = "h-7 w-7" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "youth":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.4" />
          <path d="M5 21l3.5-7L7 11l4-2 3 3 3 1" />
          <path d="M11 9l-1.5 5" />
        </svg>
      );
    case "speed":
      return (
        <svg {...common}>
          <circle cx="14" cy="5" r="2" />
          <path d="M6 21l4-6 3 2 1 4" />
          <path d="M10 15l-2-3 4-2 3 2 3-1" />
          <path d="M3 8h4M2 12h3" />
        </svg>
      );
    case "strength":
      return (
        <svg {...common}>
          <path d="M4 9v6M7 7v10M17 7v10M20 9v6" />
          <path d="M7 12h10" />
        </svg>
      );
    case "groupFitness":
      return (
        <svg {...common}>
          <circle cx="7" cy="6" r="2" />
          <circle cx="17" cy="6" r="2" />
          <path d="M3 20v-3a3 3 0 013-3h2a3 3 0 013 3v3" />
          <path d="M13 20v-3a3 3 0 013-3h2a3 3 0 013 3v3" />
        </svg>
      );
    case "stretch":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 7v6l-4 7M12 13l4 7M6 10l6 1 6-1" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8.5l6 3.5-6 3.5z" />
        </svg>
      );
    case "stopwatch":
      return (
        <svg {...common}>
          <path d="M9 2h6" />
          <circle cx="12" cy="13" r="8" />
          <path d="M12 13V9M18 7l1.5-1.5" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "whistle":
      return (
        <svg {...common}>
          <path d="M3 12a5 5 0 005 5h4l5 3v-6h1a3 3 0 000-6H8a5 5 0 00-5 4z" />
          <circle cx="8" cy="12" r="1.6" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M7 4h10v4a5 5 0 01-10 0V4z" />
          <path d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3" />
          <path d="M12 13v4M9 21h6M10 17h4" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21v-2a5 5 0 015-5h4a5 5 0 015 5v2" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
