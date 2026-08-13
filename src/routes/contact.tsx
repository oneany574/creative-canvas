import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aarav Mehta" },
      {
        name: "description",
        content:
          "Start a project with Aarav Mehta. Tell us about your company, ambition, and timeline — we reply within two business days.",
      },
      { property: "og:title", content: "Contact — Aarav Mehta" },
      {
        property: "og:description",
        content: "Start a project with Aarav Mehta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const budgets = ["< $25k", "$25 – 75k", "$75 – 150k", "$150k+"];
const services = ["Brand", "Website", "Product", "Motion", "Creative Tech"];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  services: z.array(z.string()).max(10),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps — 10 characters minimum")
    .max(2000, "Keep it under 2000 characters"),
});

type Status = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  function toggleService(s: string) {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      budget,
      services: selected,
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      await new Promise((res) => setTimeout(res, 1200));
      // Simulated submit — swap for a real endpoint when backend is wired.
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <main className="relative">
      <SmoothScroll />
      <CustomCursor />
      <Navigation />

      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            [ Contact — Q3 & Q4 2026 openings ]
          </p>
          <FadeIn>
            <h1 className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-[-0.02em]">
              Let's
              <br />
              <em className="italic">talk.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
              Tell us a little about your company and what you're building. We read
              every note and reply within two business days.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-16">
          <aside className="col-span-12 md:col-span-4 space-y-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@aaravmehta.dev"
                data-cursor="Write"
                className="mt-2 block font-display text-2xl md:text-3xl hover:italic"
              >
                hello@aaravmehta.dev
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Studios
              </p>
              <p className="mt-2 text-base text-foreground/85">
                Lisbon, PT
                <br />
                New York, US
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Elsewhere
              </p>
              <div className="mt-2 flex flex-col gap-1 text-base text-foreground/85">
                <a href="#" className="hover:italic">Instagram ↗</a>
                <a href="#" className="hover:italic">Are.na ↗</a>
                <a href="#" className="hover:italic">LinkedIn ↗</a>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-8">
            {status === "success" ? (
              <div className="rounded-sm border border-foreground/20 p-8 md:p-12">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Received
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[0.95]">
                  Thank you.
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg text-foreground/85">
                  Your note has landed with the studio. We'll be in touch within two
                  business days — usually sooner.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setSelected([]);
                      setBudget("");
                    }}
                    className="rounded-full border border-foreground/20 px-5 py-2.5 text-sm hover:border-foreground/60"
                  >
                    Send another
                  </button>
                  <Link
                    to="/"
                    className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Field
                    label="Your name"
                    name="name"
                    placeholder="Jane Doe"
                    error={errors.name}
                    disabled={status === "submitting"}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    error={errors.email}
                    disabled={status === "submitting"}
                  />
                </div>
                <Field
                  label="Company (optional)"
                  name="company"
                  placeholder="Company name"
                  error={errors.company}
                  disabled={status === "submitting"}
                />

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Services
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {services.map((s) => {
                      const active = selected.includes(s);
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleService(s)}
                          disabled={status === "submitting"}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            active
                              ? "border-foreground bg-foreground text-background"
                              : "border-foreground/20 hover:border-foreground/60"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Budget
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {budgets.map((b) => {
                      const active = budget === b;
                      return (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(active ? "" : b)}
                          disabled={status === "submitting"}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            active
                              ? "border-foreground bg-foreground text-background"
                              : "border-foreground/20 hover:border-foreground/60"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Tell us about the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={2000}
                    disabled={status === "submitting"}
                    placeholder="A few sentences about your company, the ambition, and rough timeline."
                    className="mt-3 w-full resize-y bg-transparent border-b border-foreground/20 py-3 text-base outline-none focus:border-foreground placeholder:text-muted-foreground/60 disabled:opacity-50"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-accent">{errors.message}</p>
                  )}
                </div>

                {status === "error" && errorMsg && (
                  <p className="text-sm text-accent">{errorMsg}</p>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    data-cursor="Send"
                    className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base text-background disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M7 17L17 7M17 7H8M17 7v9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Or email{" "}
                    <a href="mailto:hello@aaravmehta.dev" className="underline underline-offset-4">
                      hello@aaravmehta.dev
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={255}
        className="mt-3 w-full bg-transparent border-b border-foreground/20 py-3 text-base outline-none focus:border-foreground placeholder:text-muted-foreground/60 disabled:opacity-50"
      />
      {error && <p className="mt-2 text-xs text-accent">{error}</p>}
    </div>
  );
}
