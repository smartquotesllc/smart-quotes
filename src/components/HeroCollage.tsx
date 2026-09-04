import Image from "next/image";

export function HeroCollage() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[420px] sm:h-[460px] sm:max-w-[460px] lg:h-[520px] lg:max-w-none">
      {/* IMAGE 01 — hero primary business visual */}
      <div className="animate-float-soft absolute left-0 top-8 z-[1] w-[58%] overflow-hidden rounded-2xl shadow-[0_28px_60px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
        <Image
          src="/images/home/hero-business.jpg"
          alt="Business solutions visual"
          width={900}
          height={1100}
          className="aspect-[4/5] h-auto w-full object-cover"
          priority
        />
      </div>

      {/* IMAGE 02 — home / residential visual */}
      <div
        className="animate-float-soft absolute right-0 top-0 z-[2] w-[48%] overflow-hidden rounded-2xl shadow-[0_28px_60px_-24px_rgba(0,0,0,0.5)] ring-1 ring-white/20"
        style={{ animationDelay: "0.8s" }}
      >
        <Image
          src="/images/home/hero-home.jpg"
          alt="Home connectivity visual"
          width={780}
          height={960}
          className="aspect-[5/6] h-auto w-full object-cover"
          priority
        />
      </div>

      {/* IMAGE 03 — technology visual */}
      <div
        className="animate-float-soft absolute bottom-2 right-6 z-[3] w-[52%] overflow-hidden rounded-2xl shadow-[0_32px_64px_-26px_rgba(0,0,0,0.55)] ring-1 ring-white/25"
        style={{ animationDelay: "1.4s" }}
      >
        <Image
          src="/images/home/hero-technology.jpg"
          alt="Technology solutions visual"
          width={820}
          height={1000}
          className="aspect-[5/6] h-auto w-full object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute -right-4 top-1/3 h-28 w-28 rounded-full bg-sq-bright/30 blur-2xl"
        aria-hidden="true"
      />
    </div>
  );
}
