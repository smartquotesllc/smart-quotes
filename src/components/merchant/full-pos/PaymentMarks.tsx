/** Text-based payment acceptance marks — no invented logo artwork. */

const topRow = [
  { id: "apple-pay", label: "Apple Pay" },
  { id: "google-pay", label: "Google Pay" },
  { id: "samsung-pay", label: "Samsung Pay" },
] as const;

const bottomRow = [
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "amex", label: "American Express" },
  { id: "discover", label: "Discover" },
] as const;

function Mark({ label }: { label: string }) {
  return (
    <li className="flex h-10 flex-1 items-center justify-center rounded-lg border border-[#dbe4f0] bg-white px-2 text-center font-heading text-[10px] font-bold uppercase tracking-[0.04em] text-[#1a1a40] sm:h-11 sm:text-[11px]">
      {label}
    </li>
  );
}

export function PaymentMarks({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex w-full flex-col gap-2.5"} aria-label="Accepted payment methods">
      <ul className="flex flex-wrap gap-2 sm:gap-2.5">
        {topRow.map((mark) => (
          <Mark key={mark.id} label={mark.label} />
        ))}
      </ul>
      <ul className="flex flex-wrap gap-2 sm:gap-2.5">
        {bottomRow.map((mark) => (
          <Mark key={mark.id} label={mark.label} />
        ))}
      </ul>
    </div>
  );
}
