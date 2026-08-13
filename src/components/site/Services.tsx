import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import { FadeIn } from "./RevealText";

const services = [
  { n: "01", title: "Frontend engineering", tags: "React · TypeScript · Design systems", img: work1 },
  { n: "02", title: "Backend & APIs", tags: "Node.js · Go · GraphQL · Postgres", img: work2 },
  { n: "03", title: "Cloud & DevOps", tags: "AWS · Kubernetes · Terraform · CI/CD", img: work3 },
  { n: "04", title: "Data & performance", tags: "Kafka · ClickHouse · Profiling", img: work4 },
  { n: "05", title: "Technical leadership", tags: "Architecture · Review · Mentoring", img: work2 },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section id="services" className="relative border-t border-border py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 grid grid-cols-12 items-end gap-6 md:mb-24">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ 03 — Capabilities ]
            </p>
            <FadeIn>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
                Across the
                <br />
                <em className="italic text-accent">whole stack.</em>
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <FadeIn delay={0.15}>
              <p className="max-w-md text-muted-foreground">
                Five areas I work in daily. Owning the path from schema to
                interface means fewer handoffs, fewer surprises, and systems that
                stay coherent as they grow.
              </p>
            </FadeIn>
          </div>
        </div>

        <ul
          className="relative border-t border-border"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
          }}
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => (
            <li
              key={s.n}
              onMouseEnter={() => setActive(i)}
              data-cursor="View"
              className="group relative border-b border-border"
            >
              <a
                href="#work"
                className="grid grid-cols-12 items-baseline gap-4 py-8 transition-[padding,color] duration-500 group-hover:pl-6 md:py-12"
              >
                <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                  ({s.n})
                </span>
                <span className="col-span-10 font-display text-[clamp(2rem,5.5vw,5rem)] leading-none tracking-[-0.02em] transition-colors md:col-span-7">
                  <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:italic">
                    {s.title}
                  </span>
                </span>
                <span className="col-span-12 mt-2 text-sm text-muted-foreground md:col-span-4 md:mt-0 md:text-right">
                  {s.tags}
                </span>
              </a>
            </li>
          ))}

          {/* Cursor preview (desktop only) */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ left: pos.x, top: pos.y }}
                className="pointer-events-none absolute z-10 hidden aspect-[4/5] w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm md:block"
              >
                <img
                  src={services[active].img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
