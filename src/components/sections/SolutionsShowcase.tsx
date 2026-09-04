import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export function SolutionsShowcase() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mb-10 pb-16 sm:mb-6 sm:pb-8 lg:mb-0 lg:pb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-sq-soft p-6">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-sq-royal">
                  For Home
                </p>
                <p className="mt-3 text-xl font-bold text-sq-ink">
                  Xfinity Residential
                </p>
                <p className="mt-2 text-sm text-sq-gray">
                  Connectivity options designed around how you live.
                </p>
              </div>
              {/* IMAGE 02 reuse — residential atmosphere */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/home/hero-home.jpg"
                  alt="Home solutions atmosphere"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              {/* IMAGE 01 reuse — business atmosphere */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/home/hero-business.jpg"
                  alt="Business solutions atmosphere"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-sq-navy p-6 text-white">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                  For Business
                </p>
                <p className="mt-3 text-xl font-bold">
                  Merchant &amp; Comcast Business
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Payment and connectivity paths for growing teams.
                </p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-4 left-1/2 z-10 w-[min(100%,280px)] -translate-x-1/2 rounded-2xl border border-sq-border bg-white p-5 shadow-[0_24px_50px_-28px_rgba(8,11,34,0.5)] sm:left-auto sm:right-4 sm:translate-x-0 lg:-right-6">
            {/* IMAGE 07 — business owner floating card */}
            <div className="mb-3 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/images/home/business-owner.jpg"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-sq-ink">
                  Ready when you are
                </p>
                <p className="text-xs text-sq-gray">Free quote · No pressure</p>
              </div>
            </div>
            <Link
              href="/quote"
              className="font-heading text-xs font-bold uppercase tracking-[0.1em] text-sq-royal"
            >
              Start your request →
            </Link>
          </div>
        </div>

        <div className="lg:pl-4">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-sq-royal">
            Home &amp; Business
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-sq-ink sm:text-4xl">
            Categories built around how you connect.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sq-gray sm:text-lg">
            Whether you need payment processing, residential connectivity, or
            business networking options, Smart Quotes helps you explore trusted
            solutions and request a quote in one place.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-sq-ink">
            <li className="flex gap-2">
              <span className="text-sq-royal">✓</span> Merchant Services for
              business owners
            </li>
            <li className="flex gap-2">
              <span className="text-sq-royal">✓</span> Xfinity Residential for
              your home
            </li>
            <li className="flex gap-2">
              <span className="text-sq-royal">✓</span> Comcast Business for your
              company
            </li>
          </ul>
          <div className="mt-9">
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
