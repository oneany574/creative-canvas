export function Marquee() {
  const items = [
    "Brand systems",
    "★",
    "Digital products",
    "★",
    "Art direction",
    "★",
    "Motion & interaction",
    "★",
    "Editorial",
    "★",
    "Web design",
    "★",
    "Creative technology",
    "★",
  ];
  return (
    <div className="overflow-hidden border-y border-border py-6">
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl px-6 md:px-10"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
