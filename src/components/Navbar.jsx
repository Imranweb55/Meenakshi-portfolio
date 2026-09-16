import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  // route change par mobile menu band
  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // menu khula ho to background scroll lock
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const linkClass = ({ isActive }) =>
    [
      "relative text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-200 py-1",
      isActive ? "text-gold-light" : "text-white/80 hover:text-white",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur-sm">
      <nav className="shell flex h-[68px] items-center justify-between lg:h-[76px]">
        <Logo />

        {/* ---------- Desktop links ---------- */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] w-full origin-left bg-gold transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ---------- Right side actions ---------- */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search the website"
            aria-expanded={searchOpen}
            className="text-white/80 transition-colors hover:text-gold-light"
          >
            <Search size={18} strokeWidth={1.4} />
          </button>

          <Link
            to="/contact"
            className="hidden border border-gold/70 px-5 py-[9px] text-[0.65rem] tracking-[0.2em] text-gold-light uppercase transition-colors duration-200 hover:bg-gold hover:text-ink sm:inline-block"
          >
            Enquire Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-white lg:hidden"
          >
            {open ? (
              <X size={22} strokeWidth={1.4} />
            ) : (
              <Menu size={22} strokeWidth={1.4} />
            )}
          </button>
        </div>
      </nav>

      {/* ---------- Search bar (toggle) ---------- */}
      {searchOpen && (
        <div className="border-t border-line-dark bg-ink">
          <div className="shell py-3">
            <input
              type="search"
              autoFocus
              placeholder="Search practice areas, insights..."
              className="w-full border-b border-line-dark bg-transparent py-2 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* ---------- Mobile menu ---------- */}
      <div
        className={`overflow-hidden border-t border-line-dark bg-ink transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="shell flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <li
              key={link.to}
              className="border-b border-line-dark/70 last:border-b-0"
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-4 text-[0.72rem] tracking-[0.22em] uppercase ${
                    isActive ? "text-gold-light" : "text-white/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="py-4 sm:hidden">
            <Link
              to="/contact"
              className="inline-block border border-gold/70 px-5 py-[10px] text-[0.65rem] tracking-[0.2em] text-gold-light uppercase"
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
