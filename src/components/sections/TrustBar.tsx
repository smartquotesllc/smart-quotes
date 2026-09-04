export function TrustBar() {
  const items = [
    { title: "Trusted Providers", detail: "Established partners & solutions" },
    { title: "Top Rated Solutions", detail: "Quote-based recommendations" },
    { title: "Award Winning Support", detail: "Customer-focused assistance" },
  ];
  return (
    <section className="bg-[#1a161c] text-white" aria-label="Trust signals">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sq-purple/50 text-sq-purple" aria-hidden="true">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><path d="M8.2 13.6 4.8 10.2l1.4-1.4 2 2 5-5 1.4 1.4-6.4 6.4Z" /></svg>
            </span>
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.12em]">{item.title}</p>
              <p className="mt-1 text-sm text-white/60">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
