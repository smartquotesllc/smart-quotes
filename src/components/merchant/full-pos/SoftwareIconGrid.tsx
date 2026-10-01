import type { ReactNode } from "react";

type SoftwareItem = {
  label: string;
  icon: ReactNode;
};

function IconOrders() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <rect x="12" y="6" width="24" height="34" rx="3" fill="#3b82f6" />
      <rect x="16" y="11" width="16" height="3" rx="1.5" fill="#93c5fd" />
      <rect x="16" y="18" width="16" height="2.5" rx="1.2" fill="#fff" opacity="0.95" />
      <rect x="16" y="24" width="12" height="2.5" rx="1.2" fill="#fff" opacity="0.9" />
      <rect x="16" y="30" width="14" height="2.5" rx="1.2" fill="#fff" opacity="0.8" />
      <path d="M30 6v6h6" fill="#60a5fa" />
    </svg>
  );
}

function IconDiscounts() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <circle cx="24" cy="24" r="14" fill="#60a5fa" />
      <path
        d="M18 30 30 18M20 20.5a1.5 1.5 0 1 0 0-0.01M28 28.5a1.5 1.5 0 1 0 0-0.01"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconInventory() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <path d="M10 18 24 10l14 8v16L24 42 10 34V18Z" fill="#3b82f6" />
      <path d="M24 10v32M10 18l14 8 14-8" stroke="#93c5fd" strokeWidth="1.6" fill="none" />
      <path d="M16 22v8l8 4 8-4v-8" fill="#1d4ed8" opacity="0.35" />
    </svg>
  );
}

function IconCustomers() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <circle cx="24" cy="16" r="7" fill="#1d4ed8" />
      <path d="M10 38c1.5-8 6.5-12 14-12s12.5 4 14 12" fill="#3b82f6" />
    </svg>
  );
}

function IconReports() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <path d="M14 18h8l2 18H12l2-18Z" fill="#22d3ee" />
      <path d="M18 18c0-3 2-5 4-5" stroke="#0891b2" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M20 16h10l2 18H18" fill="#f97316" opacity="0.95" />
      <path d="M24 16c0-3.5 2.5-6 5-6" stroke="#c2410c" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M26 14h10l1.5 16H24.5" fill="#3b82f6" />
      <path d="M30 14c0-3 2-5.5 4.5-5.5" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconTransactions() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <path
        d="M24 8c7 0 12 3.5 12 10v4c0 8-5 14-12 18-7-4-12-10-12-18v-4c0-6.5 5-10 12-10Z"
        fill="#22c55e"
      />
      <circle cx="24" cy="22" r="5" fill="#fff" />
      <path d="M24 19.5v5.5M22.2 22h3.6" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconStaff() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
      <circle cx="24" cy="14" r="5" fill="#1d4ed8" />
      <circle cx="12" cy="17" r="4" fill="#3b82f6" />
      <circle cx="36" cy="17" r="4" fill="#3b82f6" />
      <path d="M10 36c1-7 5.5-11 14-11s13 4 14 11" fill="#1d4ed8" />
      <path d="M6 36c.6-4.5 3-7.5 7.5-8.5M42 36c-.6-4.5-3-7.5-7.5-8.5" fill="#60a5fa" />
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

/** Approved reference order: Orders, Discounts, Inventory, Customers, Reports, Transactions, Staff, More */
const ITEMS: SoftwareItem[] = [
  { label: "Orders", icon: <IconOrders /> },
  { label: "Discounts", icon: <IconDiscounts /> },
  { label: "Inventory", icon: <IconInventory /> },
  { label: "Customers", icon: <IconCustomers /> },
  { label: "Reports", icon: <IconReports /> },
  { label: "Transactions", icon: <IconTransactions /> },
  { label: "Staff", icon: <IconStaff /> },
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
