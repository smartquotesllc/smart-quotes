/** Thin-stroke electric-blue icons for Full POS feature + spec cards. */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GreenCheckBadge({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#22c55e] ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none">
        <path
          d="M3.5 8.2 6.4 11l6.1-7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function IconCustomers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="3.5" {...stroke} />
      <path d="M4.5 23c.6-3.4 3-5.5 6.5-5.5s5.9 2.1 6.5 5.5" {...stroke} />
      <circle cx="21.5" cy="12" r="3" {...stroke} />
      <path d="M18.2 23c.4-2.4 2-4 4.3-4 1.2 0 2.3.4 3.1 1.2" {...stroke} />
    </svg>
  );
}

export function IconLightning({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M17.5 4 8 17.5h7L13.5 28 24 13.5h-7L17.5 4Z" {...stroke} />
    </svg>
  );
}

export function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 4.5 26 8.5v7.2c0 5.6-4.1 10.2-10 11.8-5.9-1.6-10-6.2-10-11.8V8.5L16 4.5Z"
        {...stroke}
      />
      <path d="m11.5 16 3 3 6-6.5" {...stroke} />
    </svg>
  );
}

export function IconChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M6 26V12M14 26V8M22 26V14M28 26H4" {...stroke} />
    </svg>
  );
}

export function IconFans({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="10" r="3.2" {...stroke} />
      <circle cx="8" cy="12.5" r="2.6" {...stroke} />
      <circle cx="24" cy="12.5" r="2.6" {...stroke} />
      <path d="M9.5 24.5c.5-3 2.8-5 6.5-5s6 2 6.5 5" {...stroke} />
      <path d="M4.5 24c.3-2 1.6-3.4 3.8-3.8M27.5 24c-.3-2-1.6-3.4-3.8-3.8" {...stroke} />
    </svg>
  );
}

export function IconGift({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="6" y="14" width="20" height="12" rx="2" {...stroke} />
      <path d="M6 18h20M16 14v12" {...stroke} />
      <path d="M16 14c-2.5-4-6-4.5-7.5-2.5S9.5 16 12 16h4" {...stroke} />
      <path d="M16 14c2.5-4 6-4.5 7.5-2.5S22.5 16 20 16h-4" {...stroke} />
    </svg>
  );
}

export function IconCard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="5" y="10" width="30" height="20" rx="3" {...stroke} strokeWidth={2} />
      <path d="M5 16h30" {...stroke} strokeWidth={2} />
      <circle cx="27" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="31.5" cy="24" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconDimensions({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path d="M8 8H4v4M20 8h4v4M8 20H4v-4M20 20h4v-4" {...stroke} />
      <rect x="9" y="9" width="10" height="10" rx="1.5" {...stroke} />
    </svg>
  );
}

export function IconPower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <circle cx="14" cy="15" r="8" {...stroke} />
      <path d="M14 7v7" {...stroke} />
    </svg>
  );
}

export function IconPrinter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect x="8" y="4" width="12" height="6" rx="1.5" {...stroke} />
      <rect x="5" y="10" width="18" height="10" rx="2" {...stroke} />
      <rect x="9" y="16" width="10" height="7" rx="1.5" {...stroke} />
      <path d="M8 13h2M18 13h2" {...stroke} />
    </svg>
  );
}

export function IconWifi({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path d="M4.5 11.5c5.2-5 13.8-5 19 0" {...stroke} />
      <path d="M8 15.5c3.4-3.2 8.6-3.2 12 0" {...stroke} />
      <path d="M11.5 19.2c1.5-1.4 3.5-1.4 5 0" {...stroke} />
      <circle cx="14" cy="22.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPayments({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect x="4" y="9" width="18" height="12" rx="2" {...stroke} />
      <path d="M4 13h18M22 11c1.5 1 2.5 2.5 2.5 4.5S23.5 20 22 21" {...stroke} />
    </svg>
  );
}

export function IconCamera({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="5" {...stroke} />
      <path d="M14 5v2.5M14 20.5V23M5 14h2.5M20.5 14H23" {...stroke} />
      <path d="m8.5 8.5 1.8 1.8M17.7 17.7l1.8 1.8M19.5 8.5l-1.8 1.8M10.3 17.7l-1.8 1.8" {...stroke} />
    </svg>
  );
}

export function IconScreen({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect x="5" y="7" width="18" height="13" rx="2" {...stroke} />
      <path d="M11 23h6M8 9.5 9.5 11M20 9.5 18.5 11M8 17.5 9.5 16M20 17.5 18.5 16" {...stroke} />
    </svg>
  );
}

export function IconStorefront({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <path
        d="M8 18v14h24V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 14 10 8h20l4 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 14h28v4H6v-4ZM16 32V22h8v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
