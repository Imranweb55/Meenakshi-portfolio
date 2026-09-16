import { ArrowRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import images from "../data/images";

const STEPS = [
  {
    no: "01",
    title: "Understand",
    text: "We listen, review and gather the complete picture.",
  },
  {
    no: "02",
    title: "Analyse",
    text: "We examine the law, precedents and practical implications.",
  },
  {
    no: "03",
    title: "Strategise",
    text: "We build a clear, focused legal strategy.",
  },
  {
    no: "04",
    title: "Represent",
    text: "We advocate with integrity, clarity and conviction.",
  },
];

export default function Approach() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink"
      aria-labelledby="approach-heading"
    >
      {/* Left image (lg+ par) */}
      <img
        src={images.approach}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-0 left-0 -z-20 hidden h-full w-[22%] object-cover lg:block"
      />
      <div
        className="absolute top-0 left-0 -z-10 hidden h-full w-[22%] bg-gradient-to-l from-ink via-ink/70 to-ink/20 lg:block"
        aria-hidden="true"
      />

      <div className="shell py-14 sm:py-16 lg:py-16 lg:pl-[24%]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_2.2fr] lg:gap-10">
          <div className="lg:border-r lg:border-line-dark lg:pr-10">
            <SectionLabel tone="dark">Our Approach</SectionLabel>
            <h2
              id="approach-heading"
              className="mt-5 font-display text-[1.6rem] leading-[1.3] text-white sm:text-[1.95rem] lg:text-[2.05rem]"
            >
              A Disciplined Approach
              <br />
              to Every Matter
            </h2>
          </div>

          <ol className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-4">
            {STEPS.map(({ no, title, text }, i) => (
              <li key={no} className="relative lg:pr-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 font-display text-[0.8rem] text-gold-light">
                  {no}
                </span>
                <h3 className="mt-4 font-display text-[0.98rem] text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-[28ch] text-[0.75rem] leading-[1.8] text-white/55">
                  {text}
                </p>

                {/* connector arrow - sirf lg par, last item ke baad nahi */}
                {i < STEPS.length - 1 && (
                  <ArrowRight
                    size={16}
                    strokeWidth={1.2}
                    className="absolute top-[10px] -right-1 hidden text-gold/60 lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
