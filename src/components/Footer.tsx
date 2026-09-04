import Link from "next/link";

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/vacation-terms", label: "Vacation Terms" },
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

const SOCIAL = [
  { label: "Pinterest", path: "M12 3.2A8.8 8.8 0 0 0 7.6 19.4c0-1.2.3-3 .7-4.3l1.8-6.2s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.5 2 1.6 2 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8-3.1 0-5 2.3-5 4.9 0 .9.3 1.8.7 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.3-.6-1.9-2.1-1.9-3.8 0-2.8 2.4-6.2 7.1-6.2 3.8 0 6.3 2.7 6.3 5.8 0 4-2.2 6.9-5.5 6.9-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2.9-.8 2-1.2 2.7A8.8 8.8 0 1 0 12 3.2Z" },
  { label: "X", path: "M6.2 6.5h2.6l3 4 3.5-4h2.5l-4.6 5.3 4.9 5.7h-2.6l-3.3-4.2-3.8 4.2H6l4.9-5.5L6.2 6.5Z" },
  { label: "Instagram", path: "M12 7.6A4.4 4.4 0 1 0 12 16.4 4.4 4.4 0 0 0 12 7.6Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.1-7.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5c-2 0-2.3 0-3.1.1a4.7 4.7 0 0 0-3.3 3.3c-.1.8-.1 1-.1 3.1s0 2.3.1 3.1a4.7 4.7 0 0 0 3.3 3.3c.8.1 1 .1 3.1.1s2.3 0 3.1-.1a4.7 4.7 0 0 0 3.3-3.3c.1-.8.1-1 .1-3.1s0-2.3-.1-3.1a4.7 4.7 0 0 0-3.3-3.3c-.8-.1-1-.1-3.1-.1Zm0 1.4c2 0 2.2 0 3 .1a3.3 3.3 0 0 1 2.3 2.3c.1.8.1 1 .1 3s0 2.2-.1 3a3.3 3.3 0 0 1-2.3 2.3c-.8.1-1 .1-3 .1s-2.2 0-3-.1a3.3 3.3 0 0 1-2.3-2.3c-.1-.8-.1-1-.1-3s0-2.2.1-3a3.3 3.3 0 0 1 2.3-2.3c.8-.1 1-.1 3-.1Z" },
  { label: "LinkedIn", path: "M7.4 9.2H5V19h2.4V9.2ZM6.2 5A1.4 1.4 0 1 0 6.2 7.8 1.4 1.4 0 0 0 6.2 5ZM19 19h-2.4v-5.1c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.7 1.3-.1.2-.1.6-.1.9V19H10.7s0-8.2 0-9.8h2.4v1.6c.4-.6 1.2-1.8 3.1-1.8 2.2 0 3.8 1.5 3.8 4.6V19Z" },
];

export function Footer() {
  return (
    <footer className="bg-sq-navy text-white">
      {/* Trust row — homepage + site-wide pattern */}
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

      {/* Brand / phone / social — matches service mockups */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-8">
        <div>
          <p className="font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-white">
            Smart Quotes LLC
          </p>
          <p className="mt-1.5 text-sm text-white/75">
            We Connect You to Better Solutions
          </p>
        </div>
        <a
          href="tel:+18881234567"
          className="font-heading text-base font-bold tracking-wide text-white hover:text-sq-bright"
        >
          (888) 123-4567
        </a>
        <div className="flex items-center gap-3" aria-label="Social links">
          {SOCIAL.map((item) => (
            <span
              key={item.label}
              className="inline-flex h-8 w-8 items-center justify-center text-white/80"
              title={`${item.label} (placeholder)`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d={item.path} />
              </svg>
              <span className="sr-only">{item.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Legal strip — Vacation Terms retained for compliance */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Smart Quotes LLC. All rights reserved.</p>
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
