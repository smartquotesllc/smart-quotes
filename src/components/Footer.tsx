import Link from "next/link";
import { Logo } from "@/components/Logo";

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/resources", label: "Resources" },
];

const SERVICES = [
  { href: "/services/merchant-services", label: "Merchant Services" },
  { href: "/services/xfinity-residential", label: "Xfinity Residential" },
  { href: "/services/comcast-business", label: "Comcast Business" },
  { href: "/quote", label: "Request a Quote" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/vacation-terms", label: "Vacation Terms" },
];

export function Footer() {
  return (
    <footer className="bg-sq-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo variant="dark" href={null} />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Better Solutions. Better Connections. Better Business.
          </p>
          <p className="text-sm text-white/55">
            We connect you to trusted solutions.
          </p>
          <a
            href="tel:+18881234567"
            className="inline-block font-heading text-lg font-bold tracking-wide text-white hover:text-sq-bright"
          >
            (888) 123-4567
          </a>
          <p className="text-xs text-white/35">
            Phone number placeholder — replace before launch.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Company
          </h2>
          <ul className="space-y-3">
            {COMPANY.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Services
          </h2>
          <ul className="space-y-3">
            {SERVICES.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Legal
          </h2>
          <ul className="space-y-3">
            {LEGAL.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3" aria-label="Social links">
            {["Instagram", "Facebook", "X", "LinkedIn"].map((name) => (
              <span
                key={name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[10px] font-semibold uppercase tracking-wide text-white/70"
                title={`${name} (placeholder)`}
              >
                {name.slice(0, 2)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Smart Quotes LLC. All rights reserved.</p>
          <p>Professional solutions for homes and businesses.</p>
        </div>
      </div>
    </footer>
  );
}
