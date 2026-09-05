import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div
      className="border-b border-sq-border/70 bg-sq-soft/70"
      role="region"
      aria-label="Site notice"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium tracking-wide text-sq-ink/80 sm:text-xs">
          Request a quote through Smart Quotes and receive a complimentary
          vacation incentive.{" "}
          <Link
            href="/vacation-terms"
            className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
          >
            Vacation Redemption Terms
          </Link>
        </p>
      </div>
    </div>
  );
}
