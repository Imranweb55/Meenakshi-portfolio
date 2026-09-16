import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import Logo from "./Logo";

const QUICK_LINKS_1 = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Practice Areas", to: "/about" },
  { label: "Our Team", to: "/about" },
];

const QUICK_LINKS_2 = [
  { label: "Insights", to: "/about" },
  { label: "Courts", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="shell grid gap-12 py-14 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.1fr_1fr_1.1fr_1.1fr] lg:gap-8 lg:py-16">
        {/* Brand */}
        <div>
          <Logo variant="plain" />
          <p className="mt-5 text-[0.78rem] tracking-[0.06em] text-white/55">
            Advocacy, Integrity, Excellence.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-5 font-body text-[0.68rem] tracking-[0.2em] text-white uppercase">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            <ul className="space-y-3">
              {QUICK_LINKS_1.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.8rem] text-white/60 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {QUICK_LINKS_2.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.8rem] text-white/60 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="lg:border-l lg:border-line-dark lg:pl-8">
          <h3 className="mb-5 font-body text-[0.68rem] tracking-[0.2em] text-white uppercase">
            Contact
          </h3>
          <ul className="space-y-4 text-[0.8rem] text-white/60">
            <li className="flex items-start gap-3">
              <MapPin
                size={15}
                strokeWidth={1.4}
                className="mt-[3px] shrink-0 text-gold"
              />
              <span>Chennai, Tamil Nadu</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                size={15}
                strokeWidth={1.4}
                className="mt-[3px] shrink-0 text-gold"
              />
              <a href="tel:+914412345678" className="hover:text-gold-light">
                +91 44 1234 5678
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail
                size={15}
                strokeWidth={1.4}
                className="mt-[3px] shrink-0 text-gold"
              />
              <a
                href="mailto:info@meenakshilawassociates.in"
                className="break-all hover:text-gold-light"
              >
                info@meenakshilawassociates.in
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Building2
                size={15}
                strokeWidth={1.4}
                className="mt-[3px] shrink-0 text-gold"
              />
              <span>
                No. 12, 3rd Floor, Anna Salai,
                <br />
                Chennai - 600 002
              </span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="lg:border-l lg:border-line-dark lg:pl-8">
          <p className="text-[0.78rem] leading-relaxed text-white/50">
            This website is intended for general information purposes only and
            does not constitute legal advice or create an advocate-client
            relationship.
          </p>
          <div className="mt-6 flex items-center gap-4 text-[0.75rem]">
            <Link to="/about" className="text-white/60 hover:text-gold-light">
              Privacy Policy
            </Link>
            <span className="h-3 w-[1px] bg-line-dark" aria-hidden="true" />
            <Link to="/about" className="text-white/60 hover:text-gold-light">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line-dark">
        <div className="shell py-5 text-center text-[0.72rem] tracking-[0.06em] text-white/40">
          © {new Date().getFullYear()} Meenakshi Law Associates. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
