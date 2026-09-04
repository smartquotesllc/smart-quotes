export function AnnouncementBar() {
  return (
    <div className="border-b border-sq-border bg-white" role="region" aria-label="Value highlights">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-sq-ink sm:text-xs">
          One company. Multiple solutions.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-sq-gray">
          <li className="inline-flex items-center gap-1.5">
            <CheckIcon /> Professional Assistance
          </li>
          <li className="inline-flex items-center gap-1.5">
            <CheckIcon /> Quote-Based Solutions
          </li>
          <li className="inline-flex items-center gap-1.5">
            <CheckIcon /> Customer-Focused Service
          </li>
        </ul>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-sq-royal" aria-hidden="true">
      <path
        d="M3.5 8.5 6.2 11.2 12.5 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
