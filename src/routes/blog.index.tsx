import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Tag, X } from "lucide-react";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";
import { posts, postCategories, type Post } from "@/lib/posts";

const blogSearchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "All").default("All"),
  tag: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: zodValidator(blogSearchSchema),
  head: () => ({
    meta: [
      { title: "Journal — Essays on Software Engineering | Aarav Mehta" },
      {
        name: "description",
        content:
          "Essays and field notes from Aarav Mehta on TypeScript, React, reliability, performance, and how good engineering teams ship.",
      },
      { property: "og:title", content: "Journal — Aarav Mehta" },
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

const postTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

function postSearchableText(post: Post): string {
  return [
    post.title,
    post.excerpt,
    post.author,
    post.authorRole,
    post.category,
    ...post.tags,
    ...post.body.flatMap((section) =>
      [section.heading, ...section.paragraphs].filter(Boolean),
    ),
  ]
    .join(" ")
    .toLowerCase();
}

function BlogIndex() {
  const { q, category, tag } = Route.useSearch();
  const navigate = useNavigate({ from: "/blog/" });
  const [input, setInput] = useState(q);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input !== q) {
        navigate({
          search: (prev) => ({ ...prev, q: input }),
          replace: true,
        });
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [input, q, navigate]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesTag = tag === "" || p.tags.includes(tag);
      const matchesSearch =
        query === "" || postSearchableText(p).includes(query);
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [q, category, tag]);

  const [lead, ...rest] = filtered;
  const activeFilters = [
    q && `“${q}”`,
    category !== "All" && category,
    tag && `#${tag}`,
  ].filter(Boolean);

  const updateCategory = (value: string) =>
    navigate({
      search: (prev) => ({ ...prev, category: value }),
      replace: true,
    });

  const updateTag = (value: string) =>
    navigate({
      search: (prev) => ({ ...prev, tag: value === tag ? "" : value }),
      replace: true,
    });

  const clearFilters = () => {
    setInput("");
    navigate({
      search: () => ({ q: "", category: "All", tag: "" }),
      replace: true,
    });
  };

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

          <div className="mt-12 space-y-8">
            <FadeIn delay={0.2}>
              <div className="relative max-w-2xl">
                <label htmlFor="search" className="sr-only">
                  Search journal
                </label>
                <Search
                  className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="search"
                  type="search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search by title, topic, author, or keyword"
                  className="w-full border-b border-border bg-transparent py-3 pl-7 pr-10 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                />
                {input && (
                  <button
                    type="button"
                    onClick={() => setInput("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["All", ...postCategories].map((c) => (
                    <button
                      key={c}
                      onClick={() => updateCategory(c)}
                      data-cursor="Filter"
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        category === c
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20 hover:border-foreground/60"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {postTags.map((t) => (
                    <button
                      key={t}
                      onClick={() => updateTag(t)}
                      data-cursor="Filter"
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors ${
                        tag === t
                          ? "bg-accent text-accent-foreground"
                          : "border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      <Tag className="h-3 w-3" />
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center justify-between border-t border-border pt-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {filtered.length} of {posts.length} entries
                  {activeFilters.length > 0 && (
                    <span className="ml-2 text-foreground/80">
                      · {activeFilters.join(" · ")}
                    </span>
                  )}
                </p>
                {activeFilters.length > 0 && (
                  <button
                    onClick={clearFilters}
                    data-cursor="Filter"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                    Clear filters
                  </button>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="border-t border-border py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="max-w-xl">
              <p className="font-display text-3xl leading-tight md:text-4xl">
                No entries match your filters.
              </p>
              <p className="mt-4 text-muted-foreground">
                Try a broader search term, switch categories, or remove tags to find
                more essays.
              </p>
              <button
                onClick={clearFilters}
                data-cursor="Filter"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Reset all filters
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
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
                <p className="text-muted-foreground">No other entries in this view.</p>
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
        </>
      )}

      <Footer />
    </main>
  );
}
