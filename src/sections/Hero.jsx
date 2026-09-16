import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import images from "../data/images";

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[520px] items-center overflow-hidden sm:min-h-[580px] lg:min-h-[640px]"
      aria-label="Introduction"
    >
      {/* Background image */}
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />

      {/* Dark overlay: left side gehra, right side halka */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/25"
        aria-hidden="true"
      />

      <div className="shell w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-gold-light">
              Meenakshi Law Associates
            </span>
            <span className="h-[1px] w-12 bg-gold/60" aria-hidden="true" />
          </div>

          <h1 className="mt-6 font-display text-[2.1rem] leading-[1.18] text-white sm:text-[2.9rem] lg:text-[3.55rem]">
            The Law.
            <br />
            The Strategy.
            <br />
            <span className="text-gold-light">The Representation.</span>
          </h1>

          <p className="mt-6 max-w-md text-[0.85rem] leading-relaxed text-white/70 sm:text-[0.9rem]">
            Professional legal counsel grounded in experience, integrity and
            meticulous advocacy.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-6 py-[13px] text-[0.65rem] tracking-[0.18em] text-ink uppercase transition-colors duration-200 hover:bg-gold-light"
            >
              Explore Our Practice Areas
              <ArrowRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-3 border border-white/45 px-6 py-[13px] text-[0.65rem] tracking-[0.18em] text-white uppercase transition-colors duration-200 hover:border-gold hover:text-gold-light"
            >
              Meet Our Team
              <ArrowRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - sirf bade screen par */}
      <div className="absolute right-6 bottom-8 hidden flex-col items-center gap-3 lg:flex xl:right-10">
        <span className="eyebrow text-white/60">Scroll</span>
        <span className="h-10 w-[1px] bg-white/40" aria-hidden="true" />
      </div>
    </section>
  );
}
