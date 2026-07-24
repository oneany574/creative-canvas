import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import { FadeIn } from "./RevealText";

const projects = [
  {
    n: "01",
    name: "Meridian",
    cat: "Brand · Web",
    year: "2026",
    desc: "Rebranding a longevity clinic into a quiet, editorial institution.",
    img: work1,
    span: "col-span-12 md:col-span-8 aspect-[4/5]",
  },
  {
    n: "02",
    name: "Fluoro",
    cat: "Product · Motion",
    year: "2025",
    desc: "A design system and motion language for a category-defining audio app.",
    img: work2,
    span: "col-span-12 md:col-span-4 md:mt-32 aspect-[3/4]",
  },
  {
    n: "03",
    name: "North Grove",
    cat: "Identity · Packaging",
    year: "2025",
    desc: "Warm typographic identity for an independent apothecary in Copenhagen.",
    img: work3,
    span: "col-span-12 md:col-span-5 aspect-[4/5]",
  },
  {
    n: "04",
    name: "Lumen OS",
    cat: "Product · WebGL",
    year: "2024",
    desc: "A creative-tools platform with real-time canvas and node-based motion.",
    img: work4,
    span: "col-span-12 md:col-span-7 md:mt-40 aspect-[4/3]",
  },
];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <FadeIn className={p.span} y={40}>
      <div ref={ref} className="group cursor-pointer" data-cursor="View">
        <div className="relative w-full overflow-hidden rounded-sm grain h-full">
          <motion.img
            src={p.img}
            alt={p.name}
            loading="lazy"
            style={{ scale, y }}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] text-muted-foreground">({p.n})</span>
              <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{p.desc}</p>
          </div>
          <div className="text-right font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div>{p.cat}</div>
            <div className="mt-1">{p.year}</div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-border py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ 04 — Selected work ]
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
              Recent
              <br />
              <em className="italic">chapters</em>
            </h2>
          </div>
          <a
            href="#"
            data-cursor="All"
            className="hidden text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline md:inline"
          >
            Full index (24) ↗
          </a>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.n} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
