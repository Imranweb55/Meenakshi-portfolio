import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import images from "../data/images";

const POSTS = [
  {
    img: images.insight1,
    alt: "Advocate reviewing property documents",
    category: "Property Law",
    date: "08 Sep 2026",
    title: "Understanding Recent Developments in Property Law",
  },
  {
    img: images.insight2,
    alt: "Commercial agreement on a desk",
    category: "Corporate Law",
    date: "26 Aug 2026",
    title: "Key Considerations in Commercial Agreements",
  },
  {
    img: images.insight3,
    alt: "Judge's gavel on a wooden block",
    category: "Legal Insight",
    date: "14 Aug 2026",
    title: "A Practical Overview of Civil Litigation",
  },
];

export default function Insights() {
  return (
    <section
      className="bg-cream py-16 sm:py-18 lg:py-20"
      aria-labelledby="insights-heading"
    >
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:gap-14">
        <div>
          <SectionLabel>Legal Insights</SectionLabel>
          <h2
            id="insights-heading"
            className="mt-5 font-display text-[1.7rem] leading-[1.25] sm:text-[2rem] lg:text-[2.05rem]"
          >
            Latest Updates & Insights
          </h2>
          <p className="mt-5 max-w-[40ch] text-[0.8rem] leading-[1.8]">
            Stay informed with our latest articles, case analyses and legal
            developments.
          </p>
          <Link
            to="/about"
            className="group mt-6 inline-flex items-center gap-2 border-b border-heading/40 pb-1 text-[0.78rem] text-heading transition-colors hover:border-gold hover:text-gold"
          >
            View All Insights
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <li
              key={p.title}
              className="flex gap-4 border border-line bg-cream-dim/50 p-4 transition-colors duration-200 hover:border-gold/50"
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="h-[86px] w-[80px] shrink-0 object-cover sm:w-[74px]"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-[0.65rem]">
                  <span className="text-gold">{p.category}</span>
                  <span className="h-[1px] w-3 bg-line" aria-hidden="true" />
                  <span className="text-body/60">{p.date}</span>
                </div>
                <h3 className="mt-2 font-display text-[0.95rem] leading-snug">
                  {p.title}
                </h3>
                <Link
                  to="/about"
                  className="group mt-3 inline-flex items-center gap-1.5 text-[0.72rem] text-heading transition-colors hover:text-gold"
                >
                  Read More
                  <ArrowRight
                    size={12}
                    strokeWidth={1.6}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
