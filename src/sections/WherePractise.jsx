import { Landmark, Building, Scale, FileText } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import images from "../data/images";

const FORUMS = [
  { icon: Landmark, label: "Madras High Court" },
  { icon: Building, label: "District Courts" },
  { icon: Scale, label: "Tribunals & Forums" },
  { icon: FileText, label: "Other Courts & Legal Authorities" },
];

export default function WherePractise() {
  return (
    <section
      className="bg-cream-dim/70 py-14 sm:py-16 lg:py-16"
      aria-labelledby="courts-heading"
    >
      <div className="shell grid items-center gap-10 lg:grid-cols-[0.55fr_1fr_2fr] lg:gap-10">
        {/* Image */}
        <img
          src={images.court}
          alt="The Madras High Court building"
          loading="lazy"
          className="h-[150px] w-full object-cover sm:h-[180px] lg:h-[105px]"
        />

        {/* Heading */}
        <div>
          <SectionLabel>Where We Practise</SectionLabel>
          <h2
            id="courts-heading"
            className="mt-4 font-display text-[1.45rem] leading-[1.3] sm:text-[1.7rem] lg:text-[1.65rem]"
          >
            Where We Practise
          </h2>
          <p className="mt-3 max-w-[38ch] text-[0.78rem] leading-[1.8]">
            Representing clients before various courts, tribunals and legal
            forums, including:
          </p>
        </div>

        {/* Forums */}
        <ul className="grid grid-cols-2 gap-y-8 border-line sm:grid-cols-4 lg:border-l lg:pl-8">
          {FORUMS.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`flex flex-col items-center px-2 text-center ${
                i > 0 ? "sm:border-l sm:border-line" : ""
              }`}
            >
              <Icon
                size={24}
                strokeWidth={1.1}
                className="text-gold"
                aria-hidden="true"
              />
              <span className="mt-4 max-w-[14ch] text-[0.78rem] leading-snug text-heading">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
