import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Login | Achieve Performance Training",
  description:
    "Log in to access the Achieve Learning Platform — exclusive videos and the exercise reference guide.",
};

const inputBase =
  "mt-1.5 w-full rounded-card border border-black/15 bg-white px-4 py-3 text-[16px] text-ink-900 outline-none transition-colors placeholder:text-muted focus:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-red/40";

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Members"
        title={
          <>
            Member <span className="text-brand-red">Login</span>
          </>
        }
        subtitle="Sign in to access the Learning Platform — your videos and exercise reference guide, anytime, anywhere."
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-md px-6">
          <Reveal>
            <form
              className="rounded-card border border-black/10 bg-mist/50 p-7 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
              aria-label="Login form"
            >
              <p className="mb-5 rounded-card border border-brand-red/30 bg-white px-4 py-3 text-[13px] text-ink-900">
                <strong>Placeholder login.</strong> Connect this to your
                Learning Platform / auth provider before launch.
              </p>

              <div>
                <label htmlFor="email" className="text-[14px] font-medium text-ink-900">
                  Email
                </label>
                <input id="email" name="email" type="email" className={inputBase} placeholder="you@example.com" />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="text-[14px] font-medium text-ink-900">
                  Password
                </label>
                <input id="password" name="password" type="password" className={inputBase} placeholder="••••••••" />
              </div>

              <div className="mt-3 text-right">
                <Link href="#" className="link-wipe text-[13px] text-brand-red">
                  Forgot password?
                </Link>
              </div>

              <div className="mt-6">
                <Button href="#" variant="accent" withArrow className="w-full justify-center">
                  Log In
                </Button>
              </div>
            </form>

            <p className="mt-6 text-center text-[15px] text-muted">
              Not a member yet?{" "}
              <Link href={LINKS.subscribe} className="link-wipe font-semibold text-brand-red">
                Join the Learning Platform
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
