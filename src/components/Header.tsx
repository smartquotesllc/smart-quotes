"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#vacation-offer", label: "Offer" },
  { href: "/#request-quote", label: "Request a quote" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/#request-quote" size="sm">
            Get a quote
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-4">
            <span className={cn("absolute left-0 top-0 h-0.5 w-4 rounded bg-ink transition-transform", open && "top-1.5 rotate-45")} />
            <span className={cn("absolute left-0 top-1.5 h-0.5 w-4 rounded bg-ink transition-opacity", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-3 h-0.5 w-4 rounded bg-ink transition-transform", open && "top-1.5 -rotate-45")} />
          </span>
        </button>
      </div>
      <div id="mobile-nav" className={cn("border-t border-ink/5 bg-white md:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-mist"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 pb-1 pt-2">
            <Link
              href="/#request-quote"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-full items-center justify-center rounded-full bg-purple-deep text-sm font-medium text-white"
            >
              Get a quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
