/**
 * Chhota uppercase label + gold line (jaise "ABOUT US ———").
 * tone="light" -> light background ke liye
 * tone="dark"  -> dark background ke liye
 */
export default function SectionLabel({
  children,
  tone = "light",
  className = "",
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        className={`eyebrow ${tone === "dark" ? "text-gold-light" : "text-gold"}`}
      >
        {children}
      </span>
      <span
        className={`h-[1px] w-10 ${tone === "dark" ? "bg-gold/50" : "bg-gold/60"}`}
        aria-hidden="true"
      />
    </div>
  );
}
