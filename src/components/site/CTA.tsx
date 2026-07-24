import { MagneticButton } from "./MagneticButton";
import { FadeIn } from "./RevealText";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-32 md:py-56"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-10 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          [ 07 — Let's begin ]
        </div>
        <FadeIn>
          <h2 className="font-display text-[clamp(3rem,12vw,13rem)] leading-[0.88] tracking-[-0.03em]">
            Have an idea
            <br />
            <em className="italic">worth building?</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-20">
            <MagneticButton
              href="mailto:studio@ostium.co"
              data-cursor="Write"
              className="group inline-flex items-center gap-4 rounded-full bg-foreground px-8 py-5 text-base font-medium text-background md:text-lg"
            >
              studio@ostium.co
              <span className="grid h-6 w-6 place-items-center rounded-full bg-background/10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </MagneticButton>
            <span className="text-sm text-muted-foreground">
              Booking selectively for Q3 & Q4 2026.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
