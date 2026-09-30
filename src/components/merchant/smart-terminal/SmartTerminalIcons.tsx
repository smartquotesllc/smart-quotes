/** Outline icons for Smart Flex page — purple/blue line system. */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconContactless({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M13 13c5-5 9-5 14 0M15.5 17c3.2-3 6.8-3 10 0M18 21c1.8-1.6 3.8-1.6 5.6 0" {...stroke} />
      <circle cx="20.5" cy="26.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconEmv({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="9" y="10" width="22" height="20" rx="2.5" {...stroke} />
      <rect x="14" y="15" width="12" height="10" rx="1.5" {...stroke} />
      <path d="M14 20h12M20 15v10" {...stroke} />
    </svg>
  );
}

export function IconEbt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="7" y="12" width="26" height="16" rx="2.5" {...stroke} />
      <path d="M7 17h26" {...stroke} />
      <path d="M13 23h6" {...stroke} />
      <text x="24" y="25.5" fontSize="5.5" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        EBT
      </text>
    </svg>
  );
}

export function IconPinDebit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="12" y="7" width="16" height="22" rx="2.5" {...stroke} />
      <circle cx="16.5" cy="14" r="1.1" fill="currentColor" />
      <circle cx="20" cy="14" r="1.1" fill="currentColor" />
      <circle cx="23.5" cy="14" r="1.1" fill="currentColor" />
      <circle cx="16.5" cy="18.5" r="1.1" fill="currentColor" />
      <circle cx="20" cy="18.5" r="1.1" fill="currentColor" />
      <circle cx="23.5" cy="18.5" r="1.1" fill="currentColor" />
      <path d="M14 32c2-3 4-4 8-3" {...stroke} />
      <path d="M17 29.5c1.5-1 3-1.2 5-.5" {...stroke} />
    </svg>
  );
}

export function IconMagstripe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="6" y="12" width="28" height="16" rx="2.5" {...stroke} />
      <path d="M6 17h28" {...stroke} />
      <path d="M11 23h10" {...stroke} />
      <path d="M26 22.5h5M28.5 20v5" {...stroke} />
    </svg>
  );
}

export function IconCheckOutline({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border border-white ${className ?? ""}`}
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

export function IconBag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path d="M8 10h8l2 12H6l2-12Z" {...stroke} />
      <path d="M11 10c0-2.2 1.5-4 3.5-4" {...stroke} />
      <path d="M14 10h6l1.5 10H14" {...stroke} />
    </svg>
  );
}

export function IconRestaurant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path d="M7 15c0-4.5 3-7 7-7s7 2.5 7 7" {...stroke} />
      <path d="M6 16h16" {...stroke} />
      <path d="M14 16v6M10 22h8" {...stroke} />
    </svg>
  );
}

export function IconSpecialty({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path d="M5 12 8 7h12l3 5" {...stroke} />
      <path d="M6 12v10h16V12" {...stroke} />
      <path d="M11 22v-6h6v6" {...stroke} />
      <path d="M5 12h18" {...stroke} />
    </svg>
  );
}

export function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect x="4" y="10" width="20" height="13" rx="2" {...stroke} />
      <path d="M10 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" {...stroke} />
      <path d="M4 15h20" {...stroke} />
    </svg>
  );
}

export function IconHandshake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <path d="M4 14c2-1 4-1 6 0l3 2 3-2c2-1 4-1 6 0" {...stroke} />
      <path d="M10 14 8 11l3-2 3 2 3-2 3 2 3-2 3 2" {...stroke} />
      <path d="M9 18c1.5 2 3.5 3 5 3s3.5-1 5-3" {...stroke} />
    </svg>
  );
}

export function IconChevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M7 4.5 13 10l-6 5.5" {...stroke} strokeWidth={2} />
    </svg>
  );
}
