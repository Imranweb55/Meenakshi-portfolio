import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import images from "../data/images";

export default function About() {
  return (
    <section
      className="bg-cream-dim/70 py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="shell grid items-start gap-10 lg:grid-cols-[0.95fr_1.1fr_0.8fr] lg:gap-12">
        {/* Left: image card */}
        <div className="overflow-hidden">
          <img
            src={images.about}
            alt="Law books with a brass balance scale on a desk"
            loading="lazy"
            className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[330px]"
          />
        </div>

        {/* Middle: text */}
        <div>
          <SectionLabel>About Us</SectionLabel>

          <h2
            id="about-heading"
            className="mt-5 font-display text-[1.7rem] leading-[1.25] sm:text-[2.1rem] lg:text-[2.3rem]"
          >
            A Legacy of
            <br />
            Legal Excellence
          </h2>

          <p className="mt-6 max-w-[52ch] text-[0.85rem] leading-[1.85]">
            At Meenakshi Law Associates, we believe that effective advocacy
            begins with a deep understanding of the law and an equally strong
            understanding of the people and institutions it serves.
          </p>

          <p className="mt-4 max-w-[52ch] text-[0.85rem] leading-[1.85]">
            Our practice is founded on integrity, professional discipline and
            meticulous preparation. We approach every legal matter with clarity,
            confidentiality and a commitment to pursuing the most appropriate
            legal course for our clients.
          </p>

          <Link
            to="/about"
            className="group mt-7 inline-flex items-center gap-2 border-b border-heading/40 pb-1 text-[0.78rem] text-heading transition-colors hover:border-gold hover:text-gold"
          >
            Learn More
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Right: quote */}
        <figure className="border-l border-line bg-cream-dim px-7 py-10 lg:h-full">
          <blockquote className="font-display text-[1.05rem] leading-[1.75] text-heading italic sm:text-[1.15rem]">
            “Justice is not merely about winning a case, but about upholding the
            rule of law.”
          </blockquote>
          <span
            className="mt-7 block h-[1px] w-12 bg-gold/70"
            aria-hidden="true"
          />
        </figure>
      </div>
    </section>
  );
}
