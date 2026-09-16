import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionLabel from "./SectionLabel";

/**
 * About / Contact pages ke liye placeholder.
 * Baad me inhi pages ka content banake replace kar dena.
 */
export default function ComingSoon({ label, title, note }) {
  return (
    <section className="flex min-h-[60vh] items-center bg-cream py-20 lg:min-h-[65vh]">
      <div className="shell">
        <div className="mx-auto max-w-xl text-center">
          <SectionLabel className="justify-center">{label}</SectionLabel>

          <h1 className="mt-6 font-display text-[2rem] leading-[1.2] sm:text-[2.6rem]">
            {title}
          </h1>

          <p className="mt-5 text-[0.88rem] leading-[1.85] text-body">{note}</p>

          <span
            className="mx-auto mt-8 block h-[1px] w-16 bg-gold/70"
            aria-hidden="true"
          />

          <Link
            to="/"
            className="group mt-8 inline-flex items-center gap-3 border border-line px-6 py-[13px] text-[0.65rem] tracking-[0.18em] text-heading uppercase transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
