const ITEMS = [
  {
    title: "Trusted Partners",
    detail: "Established providers across key categories",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 3 4.5 6.5V11c0 5 3.2 8.7 7.5 10 4.3-1.3 7.5-5 7.5-10V6.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 12.2 11 14l3.8-3.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Guidance",
    detail: "Assistance tailored to your goals",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5.5 19c1.6-3 4-4.5 6.5-4.5S17 16 18.5 19"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Simple Process",
    detail: "Clear steps from interest to follow-up",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M5 7h14M5 12h14M5 17h9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "No Pressure",
    detail: "Explore options at your own pace",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 8v4.5l3 1.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function TrustBar() {
  return (
    <section
      className="border-b border-sq-border bg-sq-gray-light"
      aria-label="Why customers start with Smart Quotes"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-12">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-sq-border bg-white text-sq-royal">
              {item.icon}
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-sq-ink">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-sq-gray">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
