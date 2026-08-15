import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Scope", d: "Read the code, the tickets, and the traces before proposing anything. Most problems are already documented by the people living with them." },
  { n: "02", t: "Architect", d: "A short design doc: constraints, two rejected options, one recommendation. Decisions get written down before they get typed." },
  { n: "03", t: "Build", d: "Small vertical slices behind flags, typed end to end, reviewed daily. Something demoable in week one, always." },
  { n: "04", t: "Harden", d: "Integration tests on the seams, load tests on the hot path, dashboards and alerts before launch — not after the first incident." },
  { n: "05", t: "Hand over", d: "Runbooks, ADRs, and pairing sessions so the team owns it completely once I step back." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const barY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="border-t border-border py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 grid grid-cols-12 items-end gap-6 md:mb-28">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ 05 — How I ship ]
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
              Five steps,
              <br />
              <em className="italic text-primary">one loop.</em>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-muted-foreground md:col-span-5 md:col-start-8">
            Deliberately lightweight — enough process to keep changes reversible
            and reviewable, not enough to slow a release down.
          </p>
        </div>

        <div ref={ref} className="relative grid grid-cols-12 gap-6">
          <div className="col-span-2 hidden md:block">
            <div className="sticky top-32 h-[60vh] w-px overflow-hidden bg-border">
              <motion.div
                style={{ height: barY }}
                className="absolute left-0 top-0 w-px bg-primary"
              />
            </div>
          </div>

          <ol className="col-span-12 md:col-span-10">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0.35, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-4 border-t border-border py-10 last:border-b md:py-16"
              >
                <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                  {s.n}
                </span>
                <h3 className="col-span-10 font-display text-4xl leading-[0.95] md:col-span-4 md:text-6xl">
                  {s.t}
                </h3>
                <p className="col-span-12 max-w-xl text-pretty text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
                  {s.d}
                </p>
                {i === steps.length - 1 ? null : null}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
