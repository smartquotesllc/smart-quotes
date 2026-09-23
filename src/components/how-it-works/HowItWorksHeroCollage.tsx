import Image from "next/image";

const LABELS = [
  { label: "Internet", tone: "text-[#2563eb]" },
  { label: "Mobile", tone: "text-sq-purple" },
  { label: "Streaming", tone: "text-sq-purple" },
  { label: "Comcast Business", tone: "text-[#2563eb]" },
  { label: "Merchant Services", tone: "text-sq-purple" },
] as const;

/**
 * How-It-Works hero collage: full approved service families, never cropped.
 */
export function HowItWorksHeroCollage() {
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-sq-border/70 bg-gradient-to-br from-[#f7f8fc] via-white to-[#eef2ff] p-3 shadow-[0_24px_48px_-28px_rgba(26,16,72,0.35)] sm:p-4">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-3">
          <figure className="rounded-xl bg-white p-2">
            <Image
              src="/images/services/xfinity-residential-entertainment.jpg"
              alt="Xfinity Internet, Mobile and Streaming equipment family"
              width={1110}
              height={840}
              sizes="(max-width: 640px) 100vw, 33vw"
              quality={95}
              priority
              className="h-auto w-full object-contain"
            />
          </figure>
          <figure className="rounded-xl bg-white p-2">
            <Image
              src="/images/services/comcast-business-solutions.jpg"
              alt="Comcast Business connectivity, voice and cybersecurity equipment"
              width={1580}
              height={840}
              sizes="(max-width: 640px) 100vw, 33vw"
              quality={95}
              priority
              className="h-auto w-full object-contain"
            />
          </figure>
          <figure className="rounded-xl bg-white p-2">
            <Image
              src="/images/services/merchant-pos-collage.jpg"
              alt="Merchant Services full POS hardware group including kiosk and terminals"
              width={1672}
              height={678}
              sizes="(max-width: 640px) 100vw, 33vw"
              quality={95}
              priority
              className="h-auto w-full object-contain"
            />
          </figure>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
        {LABELS.map((item) => (
          <li
            key={item.label}
            className="inline-flex items-center rounded-full border border-sq-border bg-white px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-sq-ink shadow-sm"
          >
            <span className={`mr-2 h-1.5 w-1.5 rounded-full bg-current ${item.tone}`} aria-hidden="true" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
