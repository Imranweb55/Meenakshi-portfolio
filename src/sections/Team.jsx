import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import images from "../data/images";

const MEMBERS = [
  {
    img: images.team1,
    name: "Adv. Meenakshi",
    role: "Founder & Senior Advocate",
    bio: "With over 20 years of practice, Adv. Meenakshi brings a wealth of experience in handling complex legal matters across diverse fields of law.",
    alt: "Portrait of Adv. Meenakshi, Founder and Senior Advocate",
  },
  {
    img: images.team2,
    name: "Adv. Arjun Krishnan",
    role: "Partner",
    bio: "Specialising in corporate and commercial law, Adv. Arjun Krishnan advises clients on business transactions, regulatory matters and dispute resolution.",
    alt: "Portrait of Adv. Arjun Krishnan, Partner",
  },
  {
    img: images.team3,
    name: "Adv. Priya Sharma",
    role: "Partner",
    bio: "Focuses on family law, civil litigation and property matters with a client-first approach and strong advocacy skills.",
    alt: "Portrait of Adv. Priya Sharma, Partner",
  },
];

export default function Team() {
  return (
    <section
      className="bg-cream py-16 sm:py-20 lg:py-24"
      aria-labelledby="team-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_2.2fr] lg:gap-14">
        {/* Left intro */}
        <div>
          <SectionLabel>Our Advocates</SectionLabel>
          <h2
            id="team-heading"
            className="mt-5 font-display text-[1.7rem] leading-[1.25] sm:text-[2.05rem] lg:text-[2.2rem]"
          >
            The People Behind
            <br />
            the Practice
          </h2>
          <p className="mt-6 max-w-[38ch] text-[0.83rem] leading-[1.85]">
            A team of experienced advocates, each bringing depth of knowledge,
            diverse expertise and a shared commitment to client success.
          </p>
          <Link
            to="/about"
            className="group mt-7 inline-flex items-center gap-2 border-b border-heading/40 pb-1 text-[0.78rem] text-heading transition-colors hover:border-gold hover:text-gold"
          >
            Meet Our Legal Team
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards */}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {MEMBERS.map((m) => (
            <li key={m.name}>
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={m.alt}
                  loading="lazy"
                  className="h-[230px] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03] sm:h-[210px] lg:h-[195px]"
                />
              </div>
              <h3 className="mt-5 font-display text-[1.05rem]">{m.name}</h3>
              <p className="mt-1 text-[0.72rem] tracking-[0.1em] text-gold">
                {m.role}
              </p>
              <p className="mt-3 text-[0.78rem] leading-[1.8]">{m.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
