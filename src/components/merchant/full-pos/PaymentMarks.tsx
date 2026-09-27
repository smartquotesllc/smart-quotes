/** Text-based payment acceptance marks — no invented logo artwork. */

const marks = [
  { id: "apple-pay", label: "Apple Pay" },
  { id: "google-pay", label: "Google Pay" },
  { id: "samsung-pay", label: "Samsung Pay" },
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "amex", label: "American Express" },
  { id: "discover", label: "Discover" },
] as const;

export function PaymentMarks({ className }: { className?: string }) {
  return (
    <ul
      className={
        className ??
        "grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:grid-cols-2 xl:grid-cols-3"
      }
      aria-label="Accepted payment methods"
    >
      {marks.map((mark) => (
        <li
          key={mark.id}
          className="flex h-10 items-center justify-center rounded-lg border border-[#dbe4f0] bg-white px-2 text-center font-heading text-[10px] font-bold uppercase tracking-[0.04em] text-[#1a1a40] sm:h-11 sm:text-[11px]"
        >
          {mark.label}
        </li>
      ))}
    </ul>
  );
}
