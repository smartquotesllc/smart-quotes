"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string; match?: "exact" | "prefix" };

const NAV: NavItem[] = [
  { href: "/", label: "Home", match: "exact" },
  { href: "/services", label: "Services", match: "prefix" },
  { href: "/about", label: "About Us", match: "exact" },
  { href: "/resources", label: "Resources", match: "exact" },
  { href: "/contact", label: "Contact", match: "exact" },
];

const MOBILE_NAV: NavItem[] = [
  ...NAV,
  { href: "/become-an-agent", label: "Become an Agent", match: "exact" },
];

function isActive(pathname: string, item: NavItem) {
  if (item.match === "exact") return pathname === item.href;
  if (item.href === "/services") {
    return pathname === "/services" || pathname.startsWith("/services/");
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 4.8c.4-1 1.2-1.3 2-.8l1.4.9c.7.4.9 1.2.5 1.9l-.7 1.2a1.4 1.4 0 0 0 .2 1.7l2.4 2.4c.5.5 1.2.6 1.7.2l1.2-.7c.7-.4 1.5-.2 1.9.5l.9 1.4c.5.8.2 1.6-.8 2-.9.4-2 .7-3.1.4-2.5-.6-4.8-2.3-6.7-4.2-1.9-1.9-3.6-4.2-4.2-6.7-.3-1.1 0-2.2.4-3.1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmartQuoteCta({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/quote"
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-5 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple sm:h-12 sm:px-6 sm:text-xs",
        className,
      )}
      style={{
        background: "linear-gradient(135deg, #12081f 0%, #2a1458 42%, #5a2cff 100%)",
        boxShadow: "0 12px 28px -14px rgba(90,44,255,0.7)",
      }}
    >
      Get a Smart Quote
    </Link>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-all duration-300",
        scrolled
          ? "border-sq-border/70 shadow-[0_10px_30px_-20px_rgba(8,11,34,0.35)] backdrop-blur-md"
          : "border-sq-border/80",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 lg:px-8">
        <Logo size="sm" priority />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-evenly lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = isActive(pathname, item);
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "relative shrink-0 px-1 py-2 font-heading text-[13px] font-semibold tracking-[0.02em] transition-colors xl:text-sm",
                  active ? "text-sq-purple" : "text-sq-ink hover:text-sq-purple",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-sq-purple"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-0">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sq-ink transition hover:bg-sq-soft hover:text-sq-purple sm:h-11 sm:w-11"
            aria-label={`Call Smart Quotes at ${COMPANY.phoneDisplay}`}
            title={COMPANY.phoneDisplay}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>

          <Link
            href="/become-an-agent"
            className="hidden h-11 items-center justify-center rounded-md border border-sq-royal/40 bg-white px-4 font-heading text-[11px] font-extrabold uppercase tracking-[0.08em] text-sq-royal transition hover:border-sq-royal hover:bg-sq-soft xl:inline-flex"
          >
            Become an Agent
          </Link>

          <SmartQuoteCta className="hidden sm:inline-flex" />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-sq-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-full bg-sq-ink transition",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn("h-0.5 w-full bg-sq-ink transition", open && "opacity-0")}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-sq-ink transition",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-sq-border bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Mobile"
        >
          {MOBILE_NAV.map((item) => {
            const active = isActive(pathname, item);
            return (
              <Link
                key={`m-${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 font-heading text-sm font-semibold tracking-[0.02em]",
                  active
                    ? "bg-sq-soft text-sq-purple"
                    : "text-sq-ink hover:bg-sq-soft hover:text-sq-purple",
                )}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-3 space-y-2 sm:hidden" onClick={() => setOpen(false)}>
            <SmartQuoteCta className="w-full" />
          </div>
          <a
            href={COMPANY.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md px-3 py-3 text-sm font-semibold text-sq-ink hover:bg-sq-soft hover:text-sq-purple"
            onClick={() => setOpen(false)}
          >
            <PhoneIcon className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
