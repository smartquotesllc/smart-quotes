import type { ReactNode } from "react";

type SoftwareItem = {
  label: string;
  icon: ReactNode;
};

function IconOrders() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <rect x="12" y="6" width="24" height="34" rx="3" fill="#7c5cff" />
      <rect x="16" y="11" width="16" height="3" rx="1.5" fill="#ffb347" />
      <rect x="16" y="18" width="16" height="2.5" rx="1.2" fill="#fff" opacity="0.9" />
      <rect x="16" y="24" width="12" height="2.5" rx="1.2" fill="#fff" opacity="0.9" />
      <rect x="16" y="30" width="14" height="2.5" rx="1.2" fill="#fff" opacity="0.75" />
      <path d="M30 6v6h6" fill="#9b82ff" />
    </svg>
  );
}

function IconInventory() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <rect x="10" y="28" width="28" height="10" rx="2" fill="#2bb7c7" />
      <path d="M14 28V18l10-5 10 5v10" fill="#ff9f43" />
      <path d="M14 18h20" stroke="#ffb56b" strokeWidth="1.5" />
      <rect x="20" y="20" width="8" height="6" rx="1" fill="#fff3e6" />
      <path d="M10 32h28" stroke="#1f9eac" strokeWidth="1.5" />
    </svg>
  );
}

function IconEmployees() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <circle cx="24" cy="14" r="5" fill="#ff9f43" />
      <circle cx="12" cy="17" r="4" fill="#ffb347" />
      <circle cx="36" cy="17" r="4" fill="#ffb347" />
      <path d="M10 36c1-7 5.5-11 14-11s13 4 14 11" fill="#2bb7c7" />
      <path d="M6 36c.6-4.5 3-7.5 7.5-8.5M42 36c-.6-4.5-3-7.5-7.5-8.5" fill="#3ec4d2" />
    </svg>
  );
}

function IconCustomers() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <path d="M16 18h8l2 18H14l2-18Z" fill="#3b82f6" />
      <path d="M20 18c0-3 2-5 4-5" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M22 16h10l2 18H20" fill="#22c55e" opacity="0.95" />
      <path d="M26 16c0-3.5 2.5-6 5-6" stroke="#15803d" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 14h10l1.5 16H26.5" fill="#ff9f43" />
      <path d="M32 14c0-3 2-5.5 4.5-5.5" stroke="#ea7a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconDiscounts() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <path
        d="M28 8 40 20 22 38 10 26 28 8Z"
        fill="#ff9f43"
      />
      <circle cx="31" cy="17" r="2.4" fill="#fff" />
      <path d="M18 24h10M18 29h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconReporting() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <path d="M12 14h18l6 6v18a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3Z" fill="#3b82f6" />
      <path d="M30 14v6h6" fill="#60a5fa" />
      <rect x="16" y="30" width="4" height="6" rx="1" fill="#22c55e" />
      <rect x="22" y="24" width="4" height="12" rx="1" fill="#f97316" />
      <rect x="28" y="27" width="4" height="9" rx="1" fill="#eab308" />
    </svg>
  );
}

function IconTransactions() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <rect x="10" y="10" width="28" height="28" rx="6" fill="#fff" stroke="#ef4444" strokeWidth="2.5" />
      <rect x="15" y="15" width="8" height="8" rx="2" fill="#22c55e" />
      <rect x="25" y="15" width="8" height="8" rx="2" fill="#3b82f6" />
      <rect x="15" y="25" width="8" height="8" rx="2" fill="#f59e0b" />
      <rect x="25" y="25" width="8" height="8" rx="2" fill="#ef4444" />
      <path
        d="M27.2 27.4h5.6v1.5h-2v4.7h-1.6v-4.7h-2v-1.5Z"
        fill="#fff"
      />
    </svg>
  );
}

function IconMore() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <rect x="12" y="12" width="10" height="10" rx="2.5" fill="#3b82f6" />
      <rect x="26" y="12" width="10" height="10" rx="2.5" fill="#60a5fa" />
      <rect x="12" y="26" width="10" height="10" rx="2.5" fill="#60a5fa" />
      <rect x="26" y="26" width="10" height="10" rx="2.5" fill="#3b82f6" />
    </svg>
  );
}

const ITEMS: SoftwareItem[] = [
  { label: "Orders", icon: <IconOrders /> },
  { label: "Inventory", icon: <IconInventory /> },
  { label: "Employees", icon: <IconEmployees /> },
  { label: "Customers", icon: <IconCustomers /> },
  { label: "Discounts", icon: <IconDiscounts /> },
  { label: "Reporting", icon: <IconReporting /> },
  { label: "Transactions", icon: <IconTransactions /> },
  { label: "More", icon: <IconMore /> },
];

export function SoftwareIconGrid() {
  return (
    <div
      className="rounded-2xl border border-[#e4ecf7] bg-white p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.4)] sm:p-7"
      role="list"
      aria-label="POS software tools"
    >
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-8">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            role="listitem"
            className="flex flex-col items-center justify-start gap-2.5 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
              {item.icon}
            </div>
            <span className="font-heading text-[12px] font-bold text-[#1a1a40] sm:text-[13px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
