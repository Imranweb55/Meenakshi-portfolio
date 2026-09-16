import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Home,
  Users,
  ShieldCheck,
  UsersRound,
  Landmark,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const AREAS = [
  {
    icon: Briefcase,
    title: "Corporate & Commercial Law",
    text: "Strategic legal counsel for businesses, transactions, agreements and corporate matters.",
  },
  {
    icon: Home,
    title: "Civil & Property Law",
    text: "Representation and advisory services relating to property, contracts, disputes and civil proceedings.",
  },
  {
    icon: Users,
    title: "Family & Matrimonial Law",
    text: "Sensitive and considered legal assistance in matters involving family, matrimonial and personal rights.",
  },
  {
    icon: ShieldCheck,
    title: "Criminal Law",
    text: "Professional representation and legal assistance in criminal proceedings and related matters.",
  },
  {
    icon: UsersRound,
    title: "Labour & Employment Law",
    text: "Guidance on employment relationships, workplace disputes, statutory obligations and labour matters.",
  },
  {
    icon: Landmark,
    title: "Banking & Financial Matters",
    text: "Legal assistance concerning banking disputes, financial claims, recovery matters and related proceedings.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      className="bg-cream py-16 sm:py-20 lg:py-24"
      aria-labelledby="practice-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_2fr] lg:gap-16">
        {/* Left column */}
        <div>
          <SectionLabel>Practice Areas</SectionLabel>

          <h2
            id="practice-heading"
            className="mt-5 font-display text-[1.7rem] leading-[1.25] sm:text-[2.1rem] lg:text-[2.3rem]"
          >
            Our Areas of Practice
          </h2>

          <p className="mt-6 max-w-[42ch] text-[0.83rem] leading-[1.85]">
            Comprehensive legal services across a wide spectrum of matters, with
            a focus on practical solutions and lasting results.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 border border-line px-6 py-[13px] text-[0.65rem] tracking-[0.18em] text-heading uppercase transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            View All Practice Areas
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Right: grid */}
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`group ${
                // pehli row ke neeche hairline divider (sirf lg par, jaise design me hai)
                i < 3 ? "lg:border-b lg:border-line lg:pb-9" : ""
              }`}
            >
              <Icon
                size={26}
                strokeWidth={1.1}
                className="text-gold transition-transform duration-300 group-hover:-translate-y-[2px]"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-[1.02rem] leading-snug sm:text-[1.1rem]">
                {title}
              </h3>
              <p className="mt-3 max-w-[32ch] text-[0.8rem] leading-[1.8]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
