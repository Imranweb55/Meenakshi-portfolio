import { Link } from "react-router-dom";

/**
 * Brand wordmark. Navbar aur Footer dono me use hota hai.
 * variant="bar"   -> left me gold vertical line (navbar jaisa)
 * variant="plain" -> bina line (footer jaisa, gold text)
 */
export default function Logo({ variant = "bar", className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Meenakshi Law Associates - Home"
      className={`flex items-center gap-3 ${className}`}
    >
      {variant === "bar" && (
        <span className="h-9 w-[3px] shrink-0 bg-gold" aria-hidden="true" />
      )}

      <span className="leading-none">
        <span
          className={`block font-display text-[1.15rem] tracking-[0.16em] sm:text-[1.35rem] ${
            variant === "plain" ? "text-gold-light" : "text-white"
          }`}
        >
          MEENAKSHI
        </span>
        <span
          className={`mt-[3px] block text-[0.55rem] tracking-[0.34em] sm:text-[0.6rem] ${
            variant === "plain" ? "text-gold-light/80" : "text-white/70"
          }`}
        >
          LAW ASSOCIATES
        </span>
      </span>
    </Link>
  );
}
