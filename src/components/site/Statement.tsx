import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WORDS =
  "We partner with founders, operators, and creative teams to shape brands that don't blur into the noise — through strategy, identity, and interfaces engineered to feel inevitable.".split(
    " "
  );

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section id="studio" className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
      <div className="mb-12 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mb-20">
        <span>[ 02 — Manifesto ]</span>
        <span className="hidden md:inline">Ostium / Studio</span>
      </div>
      <div ref={ref} className="max-w-[1200px]">
        <p className="font-display text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.02em]">
          {WORDS.map((w, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);
            return (
              <motion.span key={i} style={{ opacity }} className="inline-block">
                {w}&nbsp;
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
