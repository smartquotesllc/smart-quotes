"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string; match?: "exact" | "prefix" };

const DEFAULT_NAV: NavItem[] = [
  { href: "/", label: "Home", match: "exact" },
  { href: "/services", label: "Services", match: "prefix" },
  { href: "/about", label: "About Us", match: "exact" },
  { href: "/resources", label: "Resources", match: "exact" },
  { href: "/contact", label: "Contact", match: "exact" },
];

const SERVICE_LABELS: Record<string, string> = {
  "merchant-services": "Merchant Services",
  "xfinity-residential": "Xfinity Residential",
  "comcast-business": "Comcast Business",
};

function isActive(pathname: string, item: NavItem, serviceActiveHref?: string) {
  if (serviceActiveHref && item.href === serviceActiveHref) return true;
  if (item.match === "exact") return pathname === item.href;
  if (item.href === "/services") {
    // When a service-detail nav item is active, do not also underline Services
    if (serviceActiveHref) return false;
    return pathname === "/services" || pathname.startsWith("/services/");
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { nav, serviceActiveHref } = useMemo(() => {
    const match = pathname.match(/^\/services\/([^/]+)/);
    const slug = match?.[1];
    const label = slug ? SERVICE_LABELS[slug] : undefined;

    // Match mockups: service detail pages surface the current service in nav
    if (slug && label && slug !== "merchant-services") {
      if (slug === "xfinity-residential") {
        return {
          serviceActiveHref: `/services/${slug}`,
          nav: [
            { href: "/", label: "Home", match: "exact" as const },
            { href: "/services", label: "Services", match: "prefix" as const },
            { href: `/services/${slug}`, label: label.toUpperCase(), match: "exact" as const },
            { href: "/resources", label: "Resources", match: "exact" as const },
            { href: "/contact", label: "Contact", match: "exact" as const },
          ],
        };
      }
      if (slug === "comcast-business") {
        return {
          serviceActiveHref: `/services/${slug}`,
          nav: [
            { href: "/", label: "Home", match: "exact" as const },
            { href: "/services", label: "Services", match: "prefix" as const },
            { href: "/about", label: "About Us", match: "exact" as const },
            { href: `/services/${slug}`, label: label.toUpperCase(), match: "exact" as const },
            { href: "/contact", label: "Contact", match: "exact" as const },
          ],
        };
      }
    }

    return { nav: DEFAULT_NAV, serviceActiveHref: undefined };
  }, [pathname]);

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
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-sq-border/70 bg-white/85 shadow-[0_10px_30px_-20px_rgba(8,11,34,0.35)] backdrop-blur-md"
          : "border-sq-border/80 bg-white",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />
        <nav className="hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item, serviceActiveHref);
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "relative font-heading text-[13px] font-semibold tracking-[0.02em] transition-colors",
                  active ? "text-sq-purple" : "text-sq-ink hover:text-sq-purple",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-sq-purple"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button href="/quote" size="sm">
            Get a Free Quote
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Button href="/quote" size="sm" className="!h-9 !px-3 !text-[10px]">
            Quote
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-sq-border"
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
                className={cn(
                  "h-0.5 w-full bg-sq-ink transition",
                  open && "opacity-0",
                )}
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
          {nav.map((item) => {
            const active = isActive(pathname, item, serviceActiveHref);
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
          <div className="mt-2" onClick={() => setOpen(false)}>
            <Button href="/quote" className="w-full">
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
