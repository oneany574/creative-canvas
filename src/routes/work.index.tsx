import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";
import { CaseStudyModal } from "@/components/site/CaseStudyModal";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Aarav Mehta" },
      {
        name: "description",
        content:
          "Selected case studies from Aarav Mehta — brand, product, and creative technology work for ambitious founders.",
      },
      { property: "og:title", content: "Work — Aarav Mehta" },
      {
        property: "og:description",
        content: "Selected case studies from Aarav Mehta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <main className="relative">
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            [ Index — {String(projects.length).padStart(2, "0")} projects ]
          </p>
          <FadeIn>
            <h1 className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-[-0.02em]">
              Selected
              <br />
              <em className="italic">work.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
              A quiet archive of recent chapters — brand systems, product surfaces, and
              creative technology, made in close collaboration with founders and teams
              we admire.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-x-4 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border">
            <div className="col-span-1">No.</div>
            <div className="col-span-5 md:col-span-4">Project</div>
            <div className="hidden md:col-span-3 md:block">Client</div>
            <div className="col-span-4 md:col-span-3">Discipline</div>
            <div className="col-span-2 md:col-span-1 text-right">Year</div>
          </div>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              data-cursor="Open"
              className="group grid grid-cols-12 gap-x-4 items-center border-b border-border py-6 md:py-8 text-left w-full transition-colors hover:bg-foreground/[0.03]"
            >
              <div className="col-span-1 font-mono text-[10px] text-muted-foreground">
                ({p.n})
              </div>
              <div className="col-span-5 md:col-span-4">
                <span className="font-display text-2xl md:text-4xl transition-transform duration-500 group-hover:translate-x-2 inline-block">
                  {p.name}
                </span>
              </div>
              <div className="hidden md:col-span-3 md:block text-sm text-muted-foreground">
                {p.client}
              </div>
              <div className="col-span-4 md:col-span-3 text-sm text-muted-foreground">
                {p.cat}
              </div>
              <div className="col-span-2 md:col-span-1 text-right font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.year}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Link
            to="/"
            data-cursor="Home"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </section>

      <Footer />
      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}
