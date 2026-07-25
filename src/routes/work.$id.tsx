import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Ostium" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.name} — Ostium Studio` },
        { name: "description", content: p.desc },
        { property: "og:title", content: `${p.name} — Ostium Studio` },
        { property: "og:description", content: p.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: WorkDetail,
  notFoundComponent: WorkNotFound,
});

function WorkNotFound() {
  return (
    <main className="relative">
      <Navigation />
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-6 font-display text-6xl md:text-8xl">Project not found</h1>
          <Link
            to="/work"
            className="mt-10 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Back to all work
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function WorkDetail() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.id === p.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="relative">
      <SmoothScroll />
      <CustomCursor />
      <Navigation />

      <section className="pt-40 pb-10 md:pt-56 md:pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Link
            to="/work"
            data-cursor="Back"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            ← All work
          </Link>
          <FadeIn>
            <h1 className="mt-8 font-display text-[clamp(3rem,12vw,12rem)] leading-[0.88] tracking-[-0.02em]">
              {p.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-foreground/85 leading-snug">
              {p.desc}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="overflow-hidden rounded-sm grain">
            <img src={p.img} alt={p.name} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4 space-y-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div>
              <div>Client</div>
              <div className="mt-2 text-foreground normal-case tracking-normal font-sans text-base">
                {p.client}
              </div>
            </div>
            <div>
              <div>Year</div>
              <div className="mt-2 text-foreground normal-case tracking-normal font-sans text-base">
                {p.year}
              </div>
            </div>
            <div>
              <div>Location</div>
              <div className="mt-2 text-foreground normal-case tracking-normal font-sans text-base">
                {p.location}
              </div>
            </div>
            <div>
              <div>Services</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-foreground/20 px-3 py-1 text-[11px] text-foreground normal-case tracking-normal font-sans"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            {p.narrative.map((para, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p>{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {p.gallery.map((g, i) => (
            <FadeIn key={i} delay={i * 0.05} className={i === 0 ? "md:col-span-2" : ""}>
              <div className="overflow-hidden rounded-sm grain">
                <img src={g} alt="" className="w-full object-cover" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Next project
            </p>
            <Link
              to="/work/$id"
              params={{ id: next.id }}
              data-cursor="Next"
              className="mt-4 block font-display text-6xl md:text-8xl leading-[0.9]"
            >
              {next.name} <span className="italic">↗</span>
            </Link>
          </div>
          <Link
            to="/contact"
            data-cursor="Start"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-background"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
