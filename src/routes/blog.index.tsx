import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";
import { posts, postCategories } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Essays on Brand & Craft | Ostium Studio" },
      {
        name: "description",
        content:
          "Essays and field notes from Ostium Studio on brand systems, interaction design, typography, and how we run creative projects.",
      },
      { property: "og:title", content: "Journal — Ostium Studio" },
      {
        property: "og:description",
        content:
          "Essays and field notes on brand systems, interaction design, and studio process.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const [lead, ...rest] = list;

  return (
    <main className="relative">
      <SmoothScroll />
      <CustomCursor />
      <Navigation />

      <section className="pt-40 pb-14 md:pt-56 md:pb-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            [ Journal — {posts.length} entries ]
          </p>
          <FadeIn>
            <h1 className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-[-0.02em]">
              Field
              <br />
              <em className="italic">notes.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
              Writing from the studio on brand systems, interaction, typography, and
              the unglamorous parts of making good work.
            </p>
          </FadeIn>

          <div className="mt-12 flex flex-wrap gap-2">
            {["All", ...postCategories].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                data-cursor="Filter"
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20 hover:border-foreground/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {lead && (
        <section className="border-t border-border py-12 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <Link
              to="/blog/$slug"
              params={{ slug: lead.slug }}
              data-cursor="Read"
              className="group grid grid-cols-12 gap-8 md:gap-14"
            >
              <div className="col-span-12 md:col-span-7 overflow-hidden rounded-sm">
                <motion.img
                  src={lead.cover}
                  alt={lead.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Latest · {lead.category} · {lead.readingTime}
                </p>
                <h2 className="mt-5 font-display text-4xl leading-[1.02] md:text-6xl">
                  {lead.title}
                </h2>
                <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
                  {lead.excerpt}
                </p>
                <p className="mt-8 text-sm text-foreground/70">
                  {lead.author} — {lead.date}
                </p>
                <span className="mt-6 inline-flex w-fit items-center gap-2 border-b border-foreground/30 pb-1 text-sm transition-colors group-hover:border-foreground">
                  Read the essay
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-border py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          {rest.length === 0 ? (
            <p className="text-muted-foreground">No other entries in this category.</p>
          ) : (
            <ul className="grid grid-cols-12 gap-x-8 gap-y-14">
              {rest.map((p, i) => (
                <motion.li
                  key={p.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-12 sm:col-span-6 lg:col-span-4"
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    data-cursor="Read"
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.n} · {p.category} · {p.readingTime}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                    <p className="mt-5 text-xs text-foreground/60">{p.date}</p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
