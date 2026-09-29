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
 * Approved hero callouts ONLY (4).
 * Explicitly excluded: "8\" Touchscreen" callout, connector, marker, and any
 * separate black 8" customer-display asset.
 */
const CALLOUTS: Callout[] = [
  {
    id: "monitor",
    label: '14" Monitor',
    pill: { left: "1%", top: "10%" },
    anchor: { left: "32%", top: "28%" },
    align: "left",
  },
  {
    id: "contactless",
    label: "Contactless Reader",
    pill: { left: "92%", top: "6%" },
    anchor: { left: "68%", top: "28%" },
    align: "right",
  },
  {
    id: "card-reader",
    label: "Credit Card Reader\nfor Dip & Swipe",
    pill: { left: "92%", top: "40%" },
    anchor: { left: "78%", top: "50%" },
    maxWidth: "10rem",
    align: "right",
  },
  {
    id: "printer",
    label: "Receipt Printer",
    pill: { left: "92%", top: "78%" },
    anchor: { left: "78%", top: "78%" },
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

/** Mobile: compact chips under a scaled-down product (no absolute desktop callouts). */
function MobileCalloutList() {
  return (
    <ul
      className="mt-2 flex flex-wrap justify-center gap-1.5 px-1 md:hidden"
      aria-label="System components"
    >
      {CALLOUTS.map((c) => (
        <li
          key={c.id}
          className="rounded-full border border-[#c7dbff] bg-white px-2.5 py-1 font-heading text-[10px] font-bold leading-snug text-[#1e3a8a] shadow-[0_4px_12px_-8px_rgba(37,99,235,0.4)] sm:px-3 sm:text-[11px]"
        >
          {c.label.replace("\n", " ")}
        </li>
      ))}
    </ul>
  );
}

/**
 * Full POS hero product visual — approved white POS hardware.
 * Mobile: constrained width so the product is part of the hero, not a full-screen image.
 * Desktop: full column width with HTML callouts. object-fit: contain always.
 */
export function FullPosHero() {
  const hero = FULL_POS_IMAGES.hero;

  return (
    <div className="full-pos-hero-visual relative mx-auto w-full min-w-0 max-w-[300px] sm:max-w-[380px] md:max-w-full lg:max-w-none">
      <div className="product-visual relative z-[1] mx-auto w-full overflow-visible">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          priority
          quality={92}
          sizes="(max-width: 480px) 300px, (max-width: 768px) 380px, (max-width: 1024px) 90vw, 58vw"
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
