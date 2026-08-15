import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";

const quotes = [
  {
    q: "Aarav rewrote our ingestion pipeline and left it more understandable than the version it replaced. Our p95 dropped by an order of magnitude.",
    name: "Amelia Vasquez",
    role: "VP Engineering, Northbeam",
  },
  {
    q: "He is the rare engineer who argues for the simpler design and then proves it with numbers. Our release cadence went from monthly to daily.",
    name: "Daniel Chen",
    role: "CTO, Fluoro Financial",
  },
  {
    q: "Six months after he handed off the platform, our team still hasn't needed to page him. That is the highest compliment I can give.",
    name: "Ines Duarte",
    role: "Head of Platform, Atlas Health",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="border-t border-border py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>[ 06 — References ]</span>
          <span>{String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</span>
        </div>

        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm grain">
              <img src={portrait} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(1.75rem,4vw,3.75rem)] leading-[1.08] tracking-[-0.02em]"
              >
                <span className="text-primary">"</span>
                {q.q}
                <span className="text-primary">"</span>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
              <div>
                <div className="text-sm">{q.name}</div>
                <div className="text-sm text-muted-foreground">{q.role}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  data-cursor="Prev"
                  aria-label="Previous quote"
                  onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
                >
                  ←
                </button>
                <button
                  data-cursor="Next"
                  aria-label="Next quote"
                  onClick={() => setI((v) => (v + 1) % quotes.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
