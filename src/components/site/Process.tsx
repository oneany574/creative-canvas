import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Discover", d: "Immersion, interviews, and honest audits. We start where the brand actually is, not where the deck says it is." },
  { n: "02", t: "Define", d: "Strategy, positioning, narrative. A single sentence the whole company can rally around." },
  { n: "03", t: "Design", d: "Identity systems, editorial art direction, and interface language — built to scale." },
  { n: "04", t: "Develop", d: "Production-grade builds. Motion, WebGL, and CMS engineered for teams to own." },
  { n: "05", t: "Deliver", d: "Launch choreography, documentation, and a partnership that outlasts the release." },
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
              [ 05 — Method ]
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
              Five moves,
              <br />
              <em className="italic text-accent">one arc.</em>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-muted-foreground md:col-span-5 md:col-start-8">
            The process is deliberately small — enough structure to protect the
            work, enough looseness to let taste and intuition lead.
          </p>
        </div>

        <div ref={ref} className="relative grid grid-cols-12 gap-6">
          <div className="col-span-2 hidden md:block">
            <div className="sticky top-32 h-[60vh] w-px overflow-hidden bg-border">
              <motion.div
                style={{ height: barY }}
                className="absolute left-0 top-0 w-px bg-accent"
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
