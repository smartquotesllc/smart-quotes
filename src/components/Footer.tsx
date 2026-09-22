import Link from "next/link";
import { Logo } from "@/components/Logo";
import { COMPANY } from "@/lib/company";

const SOLUTIONS = [
  { href: "/services/merchant-services", label: "Merchant Services" },
  { href: "/services/xfinity-residential", label: "Xfinity Residential" },
  { href: "/services/comcast-business", label: "Comcast Business" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/become-an-agent", label: "Become an Agent" },
];

const GET_STARTED = [
  { href: "/quote", label: "Get a Smart Quote" },
  { href: COMPANY.phoneHref, label: `Call Us — ${COMPANY.phoneDisplay}`, external: true },
  { href: COMPANY.emailHref, label: COMPANY.email, external: true },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy & Data Handling" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/vacation-terms", label: "Vacation Redemption Terms" },
];

const TRUST = [
  {
    title: "Trusted Providers",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3 4.5 6.5V11c0 5 3.2 8.7 7.5 10 4.3-1.3 7.5-5 7.5-10V6.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Top Rated Solutions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-4.5 7-10.2A4.8 4.8 0 0 0 12 6.2a4.8 4.8 0 0 0-7 4.6C5 16.5 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.8" r="1.8" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Award Winning Support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8.2 12.2 10.8 14.8 15.8 9.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-sq-navy text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 py-8 sm:flex-row sm:gap-12 sm:px-6 lg:gap-20 lg:px-8">
          {TRUST.map((item) => (
            <div
              key={item.title}
              className="inline-flex items-center gap-2.5 text-sm font-medium text-white/90"
            >
              <span className="text-white">{item.icon}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-center sm:px-6 sm:text-left md:grid-cols-2 lg:grid-cols-[1.15fr_repeat(3,1fr)] lg:gap-8 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <div className="rounded-md bg-white px-3 py-2">
            <Logo size="sm" href="/" className="!w-[140px]" />
          </div>
          <p className="text-sm text-white/75">{COMPANY.tagline}</p>
          <p className="text-sm text-white/65">{COMPANY.addressLine}</p>
          <p className="text-sm text-white/65">{COMPANY.hours}</p>
        </div>

        <div>
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/55">
            Solutions
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            {SOLUTIONS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/55">
            Company
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/55">
            Get Started
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            {GET_STARTED.map((link) => (
              <li key={link.href}>
                {"external" in link && link.external ? (
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{COMPANY.copyright}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {LEGAL.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white/75">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
