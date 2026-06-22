"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, LINKS, SITE, type NavItem } from "@/lib/content";
import Button from "@/components/Button";

function Logo({
  onDark,
  onClick,
}: {
  onDark: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
      aria-label={`${SITE.name} — home`}
    >
      {/* Full-colour logo on light backgrounds; white version over the dark hero. */}
      <Image
        src={onDark ? "/logo-white.png" : "/logo-trim.png"}
        alt={SITE.name}
        width={561}
        height={300}
        priority
        className="h-16 w-auto md:h-20"
      />
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Transparent over the hero; solid white with shadow once scrolled.
  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.10)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-6 py-4">
        <Logo onDark={onDark} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item: NavItem) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="menu"
                  onClick={() =>
                    setOpenDropdown((d) => (d === item.label ? null : item.label))
                  }
                  className={`link-wipe font-body text-[15px] font-medium transition-colors ${
                    onDark ? "text-white/90 hover:text-white" : "text-ink-900"
                  }`}
                >
                  {item.label}
                </button>
                {openDropdown === item.label && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full min-w-[220px] rounded-card bg-white p-2 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        role="menuitem"
                        className="block rounded-lg px-4 py-2.5 font-body text-[15px] text-ink-900 transition-colors hover:bg-mist hover:text-brand-red"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`link-wipe font-body text-[15px] font-medium transition-colors ${
                  onDark ? "text-white/90 hover:text-white" : "text-ink-900"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={LINKS.login}
            className={`link-wipe font-body text-[15px] font-medium transition-colors ${
              onDark ? "text-white/90 hover:text-white" : "text-ink-900"
            }`}
          >
            Login
          </Link>
          <Button href={LINKS.schedule} variant="accent">
            View Schedule
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-8 w-8 ${onDark ? "text-white" : "text-ink-900"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink-950 lg:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <Logo onDark onClick={() => setMenuOpen(false)} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6"
            aria-label="Mobile"
          >
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  {/* Group heading — not a link; destinations live in the children */}
                  <p className="py-1 font-display text-[34px] leading-none tracking-[0.03em] text-white/90">
                    {item.label}
                  </p>
                  <div className="mt-1 ml-1 flex flex-col border-l border-white/15 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-2 font-body text-[16px] text-white/70 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-display text-[34px] leading-none tracking-[0.03em] text-white hover:text-brand-red"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href={LINKS.login}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-display text-[34px] leading-none tracking-[0.03em] text-white hover:text-brand-red"
            >
              Login
            </Link>
          </nav>

          <div className="px-6 pb-8">
            <Button
              href={LINKS.schedule}
              variant="accent"
              withArrow
              className="w-full justify-center"
            >
              View Training Schedule
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
