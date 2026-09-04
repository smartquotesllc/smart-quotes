export function AnnouncementBar() {
  return (
    <div
      className="border-b border-sq-border/70 bg-sq-soft/40"
      role="region"
      aria-label="Site notice"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium tracking-wide text-sq-ink/70 sm:text-xs">
          Better Solutions. Better Connections. Better Business.
        </p>
      </div>
    </div>
  );
}
