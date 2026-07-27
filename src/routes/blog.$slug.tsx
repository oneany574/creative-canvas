import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";
import { getPost, posts, type Post } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Entry not found — Ostium Journal" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Ostium Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogDetail,
});

function PostNotFound() {
  return (
    <main className="relative">
      <Navigation />
      <section className="mx-auto max-w-[1600px] px-6 pt-48 pb-32 md:px-10">
        <h1 className="font-display text-5xl md:text-7xl">Entry not found.</h1>
        <Link
          to="/blog"
          className="mt-8 inline-block border-b border-foreground/30 pb-1 text-sm"
        >
          Back to the journal
        </Link>
      </section>
      <Footer />
    </main>
  );
}

function BlogDetail() {
  const { post } = Route.useLoaderData() as { post: Post };
  const index = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(index + 1) % posts.length];

  return (
    <main className="relative">
      <SmoothScroll />
      <CustomCursor />
      <Navigation />

      <article>
        <header className="pt-40 pb-12 md:pt-56 md:pb-16">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <Link
              to="/blog"
              data-cursor="Back"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              ← Journal
            </Link>
            <FadeIn>
              <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
                {post.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                {post.excerpt}
              </p>
            </FadeIn>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
              {[
                ["Author", post.author],
                ["Role", post.authorRole],
                ["Published", post.date],
                ["Reading time", post.readingTime],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 text-sm text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <img
            src={post.cover}
            alt={post.title}
            className="aspect-[16/9] w-full rounded-sm object-cover"
          />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-28">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <aside className="col-span-12 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Filed under
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-foreground/20 px-3 py-1.5 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </aside>

            <div className="col-span-12 md:col-span-8 md:col-start-5">
              {post.body.map((section, i) => (
                <section key={i} className="mb-12 md:mb-16">
                  {section.heading && (
                    <h2 className="mb-6 font-display text-3xl leading-tight md:text-4xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mb-6 text-lg leading-relaxed text-foreground/85 md:text-xl"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Next entry
          </p>
          <Link
            to="/blog/$slug"
            params={{ slug: next.slug }}
            data-cursor="Read"
            className="group mt-6 grid grid-cols-12 items-center gap-8"
          >
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-display text-4xl leading-[1.02] md:text-6xl group-hover:italic">
                {next.title}
              </h2>
              <p className="mt-4 max-w-lg text-base text-muted-foreground">
                {next.excerpt}
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 overflow-hidden rounded-sm">
              <img
                src={next.cover}
                alt={next.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
