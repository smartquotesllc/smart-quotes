import Image from "next/image";
import { FULL_POS_IMAGES } from "@/lib/full-pos-images";

type Callout = {
  id: string;
  label: string;
  /** Pill position as % of the hero stage */
  pill: { left: string; top: string };
  /** Anchor dot on the hardware as % of the hero stage */
  anchor: { left: string; top: string };
  /** Optional max width for multi-line pills */
  maxWidth?: string;
  align?: "left" | "center" | "right";
};

/**
 * Callout geometry is tuned to the approved Full POS hardware crop.
 * Percentages are relative to the image stage so they stay locked to the product.
 */
const CALLOUTS: Callout[] = [
  {
    id: "monitor",
    label: '14" Monitor',
    pill: { left: "10%", top: "3%" },
    anchor: { left: "22%", top: "18%" },
    align: "left",
  },
  {
    id: "touchscreen",
    label: '8" Touchscreen',
    pill: { left: "42%", top: "2.5%" },
    anchor: { left: "52%", top: "22%" },
    align: "center",
  },
  {
    id: "contactless",
    label: "Contactless reader",
    pill: { left: "68%", top: "14%" },
    anchor: { left: "64%", top: "28%" },
    align: "left",
  },
  {
    id: "card-reader",
    label: "Credit card reader\nfor dip & swipe",
    pill: { left: "70%", top: "34%" },
    anchor: { left: "66%", top: "42%" },
    maxWidth: "9.5rem",
    align: "left",
  },
  {
    id: "printer",
    label: "Receipt Printer",
    pill: { left: "72%", top: "78%" },
    anchor: { left: "76%", top: "72%" },
    align: "left",
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
      className="pointer-events-none absolute z-[2] hidden sm:block"
      style={{
        left: callout.pill.left,
        top: callout.pill.top,
        transform,
        maxWidth: callout.maxWidth,
      }}
    >
      <span
        className="inline-block whitespace-pre-line rounded-full border border-[#c7dbff] bg-white px-3 py-1.5 text-center font-heading text-[11px] font-bold leading-tight text-[#1e3a8a] shadow-[0_4px_14px_-6px_rgba(37,99,235,0.45)] sm:px-3.5 sm:text-xs md:text-[13px]"
      >
        {callout.label}
      </span>
    </div>
  );
}

function CalloutConnectors() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full sm:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CALLOUTS.map((c) => {
        const x1 = Number.parseFloat(c.pill.left);
        const y1 = Number.parseFloat(c.pill.top) + 3.2;
        const x2 = Number.parseFloat(c.anchor.left);
        const y2 = Number.parseFloat(c.anchor.top);
        // Nudge line start toward pill center for center-aligned pills
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
            <circle cx={x2} cy={y2} r="0.7" fill="#3b82f6" />
          </g>
        );
      })}
    </svg>
  );
}

/** Compact, readable label chips for small screens (no tiny overlay text). */
function MobileCalloutList() {
  return (
    <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden" aria-label="System components">
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

export function FullPosHero() {
  const hero = FULL_POS_IMAGES.hero;

  return (
    <div className="relative w-full min-w-0">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#e8f2ff] blur-[2px]"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto w-full max-w-full">
        <div className="relative w-full">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            priority
            quality={92}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 58vw"
            className="relative mx-auto object-contain"
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
          <CalloutConnectors />
          {CALLOUTS.map((callout) => (
            <CalloutPill key={callout.id} callout={callout} />
          ))}
        </div>
      </div>
      <MobileCalloutList />
    </div>
  );
}
