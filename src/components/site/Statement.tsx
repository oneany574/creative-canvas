import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const WORDS =
  "I work with product teams to turn vague problems into software that holds up in production — clear architecture, typed end to end, observable, and simple enough that the next engineer can move fast in it.".split(
    " "
  );

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section id="studio" className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
      <div className="mb-12 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mb-20">
        <span>[ 02 — How I work ]</span>
        <span className="hidden md:inline">Aarav Mehta / Engineering</span>
      </div>
      <div ref={ref} className="max-w-[1200px]">
        <p className="font-display text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.02em]">
          {WORDS.map((w, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {w}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
