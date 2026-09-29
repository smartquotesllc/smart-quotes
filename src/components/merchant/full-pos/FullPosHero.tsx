import Image from "next/image";
import { FULL_POS_IMAGES } from "@/lib/full-pos-images";

type Callout = {
  id: string;
  label: string;
  /** Pill position as % of the product visual stage */
  pill: { left: string; top: string };
  /** Anchor on the approved white POS hardware as % of the stage */
  anchor: { left: string; top: string };
  maxWidth?: string;
  align?: "left" | "center" | "right";
};

/**
 * Approved hero callouts (4) — no separate black 8" screen, no 8" Touchscreen label.
 * Hardware: white primary monitor + cash drawer, contactless/card reader, receipt printer.
 */
const CALLOUTS: Callout[] = [
  {
    id: "monitor",
    label: '14" Monitor',
    pill: { left: "2%", top: "12%" },
    anchor: { left: "30%", top: "30%" },
    align: "left",
  },
  {
    id: "contactless",
    label: "Contactless Reader",
    pill: { left: "86%", top: "8%" },
    anchor: { left: "60%", top: "30%" },
    align: "right",
  },
  {
    id: "card-reader",
    label: "Credit Card Reader\nfor Dip & Swipe",
    pill: { left: "86%", top: "38%" },
    anchor: { left: "67%", top: "46%" },
    maxWidth: "10rem",
    align: "right",
  },
  {
    id: "printer",
    label: "Receipt Printer",
    pill: { left: "86%", top: "74%" },
    anchor: { left: "67%", top: "72%" },
    align: "right",
  },
];

function CalloutPill({ callout }: { callout: Callout }) {
  const transform =
    callout.align === "center"
      ? "translateX(-50%)"
      : callout.align === "right"
        ? "translateX(-100%)"
        : undefined;

  return (
    <div
      className="pointer-events-none absolute z-[2] hidden md:block"
      style={{
        left: callout.pill.left,
        top: callout.pill.top,
        transform,
        maxWidth: callout.maxWidth,
      }}
    >
      <span className="inline-block whitespace-pre-line rounded-full border border-[#c7dbff] bg-white px-3 py-1.5 text-center font-heading text-[11px] font-bold leading-tight text-[#1e3a8a] shadow-[0_4px_14px_-6px_rgba(37,99,235,0.45)] sm:px-3.5 sm:text-xs lg:text-[13px]">
        {callout.label}
      </span>
    </div>
  );
}

function CalloutConnectors() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CALLOUTS.map((c) => {
        const x1 = Number.parseFloat(c.pill.left);
        const y1 = Number.parseFloat(c.pill.top) + 3.2;
        const x2 = Number.parseFloat(c.anchor.left);
        const y2 = Number.parseFloat(c.anchor.top);
        const startX =
          c.align === "center" ? x1 : c.align === "right" ? x1 - 4 : x1 + 6;
        return (
          <g key={c.id}>
            <line
              x1={startX}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#3b82f6"
              strokeWidth="0.35"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={x2} cy={y2} r="0.65" fill="#3b82f6" />
          </g>
        );
      })}
    </svg>
  );
}

/** On small screens, keep full hardware visible and list labels as chips. */
function MobileCalloutList() {
  return (
    <ul
      className="mt-3 flex flex-wrap justify-center gap-2 md:hidden"
      aria-label="System components"
    >
      {CALLOUTS.map((c) => (
        <li
          key={c.id}
          className="rounded-full border border-[#c7dbff] bg-white px-3 py-1.5 font-heading text-[11px] font-bold leading-snug text-[#1e3a8a] shadow-[0_4px_12px_-8px_rgba(37,99,235,0.4)]"
        >
          {c.label.replace("\n", " ")}
        </li>
      ))}
    </ul>
  );
}

/**
 * Full POS hero product visual — approved white POS hardware.
 * Entire system shown with object-fit: contain (never cover / never cropped).
 * No separate black 8" customer display.
 */
export function FullPosHero() {
  const hero = FULL_POS_IMAGES.hero;

  return (
    <div className="relative w-full min-w-0">
      <div className="product-visual relative z-[1] mx-auto w-full max-w-full overflow-visible">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          priority
          quality={92}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 58vw"
          className="relative mx-auto block h-auto w-full max-w-full object-contain object-center"
        />
        <CalloutConnectors />
        {CALLOUTS.map((callout) => (
          <CalloutPill key={callout.id} callout={callout} />
        ))}
      </div>
      <MobileCalloutList />
    </div>
  );
}
