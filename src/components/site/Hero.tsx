import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const preDelay = 2.0;

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden pb-24 pt-32 md:pt-40">
      {/* Corner labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: preDelay + 0.6, duration: 1 }}
        className="pointer-events-none absolute inset-x-6 top-24 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inset-x-10 md:top-28"
      >
        <span>[ 01 — Software engineer · Full-stack ]</span>
        <span className="hidden md:inline">8 yrs shipping · Available Q4 2026 ↗</span>
      </motion.div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="font-display text-[clamp(3.25rem,10.5vw,11rem)] leading-[0.92] tracking-[-0.03em]">
            {["I build", "software that", <em key="i" className="italic text-primary">scales.</em>].map(
              (line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: preDelay + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block will-change-transform"
                  >
                    {line}
                  </motion.span>
                </span>
              )
            )}
          </h1>
        </div>

        <div className="col-span-12 mt-10 flex flex-col justify-end gap-8 lg:col-span-4 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: preDelay + 0.6, duration: 0.9 }}
            className="max-w-sm text-pretty text-base text-muted-foreground md:text-lg"
          >
            I'm Aarav Mehta — a full-stack engineer specialising in TypeScript, React, and
            distributed backends. Eight years turning ambiguous problems into systems teams
            can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: preDelay + 0.8, duration: 0.9 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#work"
              data-cursor="View"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors"
            >
              See selected projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </MagneticButton>
            <MagneticButton
              href="#contact"
              data-cursor="Talk"
              className="rounded-full border border-foreground/25 px-6 py-3.5 text-sm transition-colors hover:border-foreground/60"
            >
              Get in touch
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Hero visual */}
      <motion.div
        style={{ y, scale, opacity }}
        className="relative mx-auto mt-16 max-w-[1600px] px-6 md:mt-24 md:px-10"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: preDelay + 0.4, duration: 1.4, ease: [0.87, 0, 0.13, 1] }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-md grain"
        >
          <img
            src={heroImg}
            alt="A bright minimal desk with a laptop showing code, lit by soft daylight"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-foreground/80 md:inset-x-10 md:bottom-10">
            <span className="rounded-full bg-card/80 px-3 py-1.5 backdrop-blur-sm">◐ Currently — Lead engineer, Northbeam</span>
            <span className="rounded-full bg-card/80 px-3 py-1.5 backdrop-blur-sm">TS · React · Go · K8s</span>
          </div>

        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: preDelay + 1.0, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        <span className="flex flex-col items-center gap-2">
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-6 w-px bg-foreground/40"
          />
        </span>
      </motion.div>
    </section>
  );
}
