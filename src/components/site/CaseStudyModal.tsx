import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

export function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-10 w-full max-w-5xl px-6 md:my-20 md:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Case study ({project.n})
                </p>
                <h2 className="mt-2 font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
                  {project.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                data-cursor="Close"
                className="mt-2 grid h-11 w-11 flex-none place-items-center rounded-full border border-foreground/20 transition-colors hover:border-foreground/60"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            <div className="overflow-hidden rounded-sm grain">
              <img src={project.img} alt={project.name} className="w-full object-cover" />
            </div>

            <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-4 space-y-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <div>
                  <div>Client</div>
                  <div className="mt-1 text-foreground normal-case tracking-normal font-sans text-sm">
                    {project.client}
                  </div>
                </div>
                <div>
                  <div>Year</div>
                  <div className="mt-1 text-foreground normal-case tracking-normal font-sans text-sm">
                    {project.year}
                  </div>
                </div>
                <div>
                  <div>Location</div>
                  <div className="mt-1 text-foreground normal-case tracking-normal font-sans text-sm">
                    {project.location}
                  </div>
                </div>
                <div>
                  <div>Services</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-foreground/20 px-3 py-1 text-[10px] text-foreground normal-case tracking-normal font-sans"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
                {project.narrative.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {project.gallery.map((g, i) => (
                <div key={i} className="overflow-hidden rounded-sm grain aspect-[4/5]">
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-10 mb-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
              <span className="text-sm text-muted-foreground">
                Read the full case study
              </span>
              <Link
                to="/work/$id"
                params={{ id: project.id }}
                onClick={onClose}
                data-cursor="Open"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-background"
              >
                Open case study
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
