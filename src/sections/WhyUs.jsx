import SectionLabel from "../components/SectionLabel";
import images from "../data/images";

const PILLARS = [
  {
    no: "01",
    title: "Experience",
    text: "Knowledge developed through years of legal practice and professional engagement.",
  },
  {
    no: "02",
    title: "Strategic Thinking",
    text: "Every matter is approached through careful analysis, preparation and legal strategy.",
  },
  {
    no: "03",
    title: "Integrity",
    text: "Professional ethics, confidentiality and transparency remain central to our practice.",
  },
  {
    no: "04",
    title: "Client-Centred Approach",
    text: "We listen carefully, communicate clearly and provide considered legal guidance.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink"
      aria-labelledby="why-heading"
    >
      {/* Right side image (sirf lg+ par, design jaisa) */}
      <img
        src={images.whyUs}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-0 right-0 -z-20 hidden h-full w-[26%] object-cover lg:block"
      />
      <div
        className="absolute top-0 right-0 -z-10 hidden h-full w-[26%] bg-gradient-to-r from-ink via-ink/70 to-ink/30 lg:block"
        aria-hidden="true"
      />

      <div className="shell grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.9fr_2.4fr] lg:gap-12 lg:py-16">
        <div>
          <SectionLabel tone="dark">Why Meenakshi Law Associates</SectionLabel>
          <h2
            id="why-heading"
            className="mt-5 font-display text-[1.6rem] leading-[1.3] text-white sm:text-[2rem] lg:text-[2.1rem]"
          >
            Principled Advocacy.
            <br />
            Precise Counsel.
          </h2>
        </div>

        <ul className="grid gap-y-9 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-7 lg:pr-[24%]">
          {PILLARS.map(({ no, title, text }, i) => (
            <li
              key={no}
              className={`${
                i > 0 ? "lg:border-l lg:border-line-dark lg:pl-7" : ""
              }`}
            >
              <span className="block font-display text-[1.25rem] text-gold-light">
                {no}
              </span>
              <h3 className="mt-3 font-display text-[1rem] text-white sm:text-[1.05rem]">
                {title}
              </h3>
              <p className="mt-3 max-w-[30ch] text-[0.78rem] leading-[1.8] text-white/55">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
