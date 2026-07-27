import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Work", href: "/work", route: true },
  { label: "Services", href: "/#services", route: false },
  { label: "Journal", href: "/blog", route: true },
  { label: "Contact", href: "/contact", route: true },
  { label: "Login", href: "/login", route: true },
];


export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.1 }}
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-500 ${
          scrolled ? "bg-background/70 backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
          <Link to="/" className="flex items-baseline gap-2" data-cursor="Home">
            <span className="font-display text-2xl leading-none">Ostium</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:inline">
              Studio ©
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) =>
              l.route ? (
                <Link
                  key={l.href}
                  to={l.href}
                  data-cursor="View"
                  className="group relative text-sm text-foreground/85 transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  data-cursor="View"
                  className="group relative text-sm text-foreground/85 transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              href="/contact"
              data-cursor="Say hi"
              className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-2.5 text-sm transition-colors hover:border-foreground/60"
            >
              <span className="relative h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent" />
                <span className="absolute inset-0 animate-ping rounded-full bg-accent" />
              </span>
              Start a project
            </MagneticButton>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-px w-6 bg-foreground transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-foreground transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="fixed inset-0 z-[80] flex flex-col justify-between bg-background px-6 pb-10 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-border py-6 font-display text-5xl"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Ostium Studio</span>
              <span>Lisbon · New York</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
