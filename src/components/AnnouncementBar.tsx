import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div
      className="bg-sq-purple text-white"
      role="region"
      aria-label="Complimentary vacation incentive"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium tracking-wide text-white/95 sm:text-xs">
          Request a quote through Smart Quotes and receive a complimentary
          vacation incentive.{" "}
          <Link
            href="/vacation-terms"
            className="font-semibold text-white underline underline-offset-2 hover:text-white/90"
          >
            Vacation Redemption Terms
          </Link>
        </p>
      </div>
    </div>
  );
}
