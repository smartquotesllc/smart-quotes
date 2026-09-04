export function HeroWave({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        className="animate-wave-drift relative block h-[90px] w-[110%] max-w-none sm:h-[120px] lg:h-[140px]"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 C180,140 320,20 480,70 C640,120 760,30 960,75 C1120,110 1280,40 1440,85 L1440,140 L0,140 Z"
          fill="rgba(255,255,255,0.08)"
        />
        <path
          d="M0,95 C220,40 360,130 540,85 C720,40 860,120 1080,80 C1240,50 1340,100 1440,70 L1440,140 L0,140 Z"
          fill="rgba(255,255,255,0.12)"
        />
        <path
          d="M0,110 C200,70 340,130 520,105 C700,80 820,130 1020,100 C1200,70 1320,115 1440,95 L1440,140 L0,140 Z"
          fill="#F7F8FC"
        />
      </svg>
    </div>
  );
}
