import Link from "next/link";
import { Logo } from "@/components/Logo";

const FOOTER_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#request-quote", label: "Request a quote" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/vacation-terms", label: "Vacation Offer Terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/5 bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo size="sm" />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Smart Quotes LLC helps you explore Merchant Services, Xfinity
              Residential, and Comcast Business options — then request a quote
              and move toward an appointment.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:text-right" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-ink/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Smart Quotes LLC. All rights reserved.</p>
          <p>Independent information and quote-request service.</p>
        </div>
      </div>
    </footer>
  );
}
