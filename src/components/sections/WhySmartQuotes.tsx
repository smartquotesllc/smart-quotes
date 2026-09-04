const BENEFITS = [
  {
    title: "One starting point",
    detail:
      "Home and business categories in a single, easy-to-navigate experience.",
  },
  {
    title: "Guided quote requests",
    detail:
      "Your details are routed to the right Smart Quotes process for follow-up.",
  },
  {
    title: "Transparent next steps",
    detail:
      "Clear confirmation after you submit — then personalized assistance.",
  },
  {
    title: "Customer-first approach",
    detail:
      "Simple process, personalized help, and no pressure to decide on the spot.",
  },
];

export function WhySmartQuotes() {
  return (
    <section
      id="why-smart-quotes"
      className="relative overflow-hidden bg-sq-dark-blue py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(38,61,255,0.35), transparent 45%), radial-gradient(ellipse at 90% 80%, rgba(65,105,255,0.2), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Why Smart Quotes
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built to connect you with the right solution.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            We focus on clarity, guided assistance, and a respectful experience
            from first visit to follow-up.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="mb-4 font-heading text-sm font-bold text-sq-bright">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
