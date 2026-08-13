import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { FadeIn } from "@/components/site/RevealText";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Client Login — Aarav Mehta" },
      {
        name: "description",
        content:
          "Sign in to the Aarav Mehta client portal to review deliverables, approve rounds, and track project milestones.",
      },
      { property: "og:title", content: "Client Login — Aarav Mehta" },
      {
        property: "og:description",
        content: "Sign in to the Aarav Mehta client portal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(255),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long"),
});

type Status = "idle" | "submitting" | "success" | "error";

function LoginPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const parsed = loginSchema.safeParse({
      email: String(fd.get("email") ?? ""),
      password: String(fd.get("password") ?? ""),
    });
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
    await new Promise((res) => setTimeout(res, 1100));
    // No authentication backend is connected yet — this is a UI-only flow.
    setStatus("error");
    setErrorMsg(
      "Accounts aren't live yet. The portal opens to clients later this quarter.",
    );
  }

  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />

      <section className="grid min-h-screen grid-cols-12">
        <div className="col-span-12 flex items-center px-6 pb-20 pt-36 md:col-span-6 md:px-14 md:pt-40 lg:px-24">
          <div className="w-full max-w-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ Client portal ]
            </p>
            <FadeIn>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em]">
                Welcome
                <br />
                <em className="italic">back.</em>
              </h1>
            </FadeIn>
            <p className="mt-6 text-base text-muted-foreground">
              Sign in to review deliverables, approve rounds, and follow milestones.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-12 space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  disabled={status === "submitting"}
                  className="mt-3 w-full border-b border-foreground/20 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground/60 focus:border-foreground disabled:opacity-50"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-accent">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="password"
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShow((v) => !v)}
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
                  >
                    {show ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  disabled={status === "submitting"}
                  className="mt-3 w-full border-b border-foreground/20 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground/60 focus:border-foreground disabled:opacity-50"
                />
                {errors.password && (
                  <p className="mt-2 text-xs text-accent">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-sm text-foreground/80">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 accent-current"
                  />
                  Keep me signed in
                </label>
                <a
                  href="mailto:hello@aaravmehta.dev?subject=Portal%20access"
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  Forgot password?
                </a>
              </div>

              {status === "error" && errorMsg && (
                <p className="text-sm text-accent">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                data-cursor="Enter"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 text-base text-background disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                    Signing in
                  </>
                ) : (
                  "Sign in"
                )}
              </button>

              <p className="text-sm text-muted-foreground">
                No access yet?{" "}
                <Link to="/contact" className="underline underline-offset-4">
                  Start a project
                </Link>{" "}
                and we'll set you up.
              </p>
            </form>
          </div>
        </div>

        <div className="relative col-span-12 hidden md:col-span-6 md:block">
          <img
            src={portrait}
            alt="Aarav Mehta editorial portrait"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-10 lg:p-14">
            <p className="max-w-sm font-display text-2xl leading-snug lg:text-3xl">
              "The portal is where the work quietly happens between presentations."
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Aarav Mehta — Lisbon · New York
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
