import Image from "next/image";
import { SERVICE_IMAGES } from "@/lib/service-images";

const LABELS = [
  { label: "Internet", tone: "text-[#2563eb]" },
  { label: "Mobile", tone: "text-sq-purple" },
  { label: "Streaming", tone: "text-sq-purple" },
  { label: "Comcast Business", tone: "text-[#2563eb]" },
  { label: "Merchant Services", tone: "text-sq-purple" },
] as const;

/**
 * How-It-Works hero collage: IMAGE B + IMAGE C + IMAGE E, never cropped.
 */
export function HowItWorksHeroCollage() {
  const panels = [
    SERVICE_IMAGES.xfinityPrimary,
    SERVICE_IMAGES.comcast,
    SERVICE_IMAGES.merchantCard,
  ] as const;

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-sq-border/70 bg-gradient-to-br from-[#f7f8fc] via-white to-[#eef2ff] p-3 shadow-[0_24px_48px_-28px_rgba(26,16,72,0.35)] sm:p-4">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-3">
          {panels.map((img) => (
            <figure key={img.src} className="rounded-xl bg-white p-2">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={95}
                priority
                className="h-auto w-full object-contain"
              />
            </figure>
          ))}
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
        {LABELS.map((item) => (
          <li
            key={item.label}
            className="inline-flex items-center rounded-full border border-sq-border bg-white px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-sq-ink shadow-sm"
          >
            <span
              className={`mr-2 h-1.5 w-1.5 rounded-full bg-current ${item.tone}`}
              aria-hidden="true"
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
