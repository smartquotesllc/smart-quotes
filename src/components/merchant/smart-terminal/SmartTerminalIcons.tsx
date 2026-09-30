/** Blue/purple line icons for Smart Terminal page sections. */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTapPay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="8" y="6" width="18" height="26" rx="3" {...stroke} />
      <path d="M26 18c3 1.5 5 4 5 7.5" {...stroke} />
      <path d="M26 22c1.8 1 3 2.6 3 4.5" {...stroke} />
      <path d="M14 28h6" {...stroke} />
    </svg>
  );
}

export function IconLightning({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M22 6 12 22h8L16 34l12-18h-8L22 6Z" {...stroke} />
    </svg>
  );
}

export function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 6c6 0 10 2.5 10 7v4c0 7-4 12-10 15-6-3-10-8-10-15v-4c0-4.5 4-7 10-7Z" {...stroke} />
      <path d="m15.5 20 3 3 6.5-7" {...stroke} />
    </svg>
  );
}

export function IconChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M8 32V14M16 32V10M24 32V18M32 32H6" {...stroke} />
    </svg>
  );
}

export function IconCard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="5" y="11" width="30" height="20" rx="3" {...stroke} />
      <path d="M5 18h30M11 25h8" {...stroke} />
    </svg>
  );
}

export function IconContactless({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M14 14c4-4 8-4 12 0M16.5 17.5c2.5-2.5 5-2.5 7.5 0M19 21c1.2-1.2 2.3-1.2 3.5 0" {...stroke} />
      <circle cx="20.5" cy="26" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconEmv({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="10" y="8" width="20" height="24" rx="3" {...stroke} />
      <rect x="14" y="14" width="12" height="9" rx="1.5" {...stroke} />
      <path d="M14 18.5h12M20 14v9" {...stroke} />
    </svg>
  );
}

export function IconEbt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="6" y="12" width="28" height="18" rx="3" {...stroke} />
      <path d="M6 18h28M12 24h8" {...stroke} />
    </svg>
  );
}

export function IconPinDebit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="9" y="7" width="22" height="26" rx="3" {...stroke} />
      <circle cx="15" cy="16" r="1.3" fill="currentColor" />
      <circle cx="20" cy="16" r="1.3" fill="currentColor" />
      <circle cx="25" cy="16" r="1.3" fill="currentColor" />
      <circle cx="15" cy="21" r="1.3" fill="currentColor" />
      <circle cx="20" cy="21" r="1.3" fill="currentColor" />
      <circle cx="25" cy="21" r="1.3" fill="currentColor" />
      <circle cx="15" cy="26" r="1.3" fill="currentColor" />
      <circle cx="20" cy="26" r="1.3" fill="currentColor" />
      <circle cx="25" cy="26" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconMagstripe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="7" y="10" width="26" height="20" rx="3" {...stroke} />
      <path d="M7 16h26M12 22v4M17 22v4M22 22v4" {...stroke} />
    </svg>
  );
}

export function IconTouchscreen({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="11" y="5" width="18" height="30" rx="3" {...stroke} />
      <path d="M16 30h8" {...stroke} />
    </svg>
  );
}

export function IconDisplay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="6" y="10" width="28" height="18" rx="2.5" {...stroke} />
      <path d="M14 32h12M20 28v4" {...stroke} />
    </svg>
  );
}

export function IconWifi({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M8 16c6.5-6 17.5-6 24 0M12 21c4.5-4 11.5-4 16 0M16.5 26c2.2-2 5-2 7 0" {...stroke} />
      <circle cx="20" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconPrinter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M12 16V8h16v8" {...stroke} />
      <rect x="8" y="16" width="24" height="12" rx="2" {...stroke} />
      <path d="M12 28v6h16v-6" {...stroke} />
    </svg>
  );
}

export function IconBattery({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="6" y="13" width="24" height="14" rx="2.5" {...stroke} />
      <path d="M30 18v4h3v-4h-3Z" {...stroke} />
      <path d="M10 17h14v6H10z" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function IconPortable({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M14 10h12l3 8v12a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V18l3-8Z" {...stroke} />
      <path d="M14 18h12" {...stroke} />
    </svg>
  );
}

export function IconStorefront({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M6 16 10 8h20l4 8" {...stroke} />
      <path d="M8 16v14h24V16" {...stroke} />
      <path d="M16 30v-8h8v8" {...stroke} />
      <path d="M6 16h28" {...stroke} />
    </svg>
  );
}

export function IconCheckBox({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-white ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#2563eb]" fill="none">
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
