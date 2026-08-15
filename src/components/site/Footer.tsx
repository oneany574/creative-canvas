export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-6 py-16 md:px-10 md:py-24">
        <div className="col-span-12 md:col-span-5">
          <div className="font-display text-6xl md:text-8xl">Aarav Mehta.</div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Full-stack software engineer working across TypeScript, React, Go,
            and cloud infrastructure.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Navigate
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#work" className="hover:text-primary">Projects</a></li>
            <li><a href="#services" className="hover:text-primary">Capabilities</a></li>
            <li><a href="#studio" className="hover:text-primary">About</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Elsewhere
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">GitHub ↗</a></li>
            <li><a href="#" className="hover:text-primary">LinkedIn ↗</a></li>
            <li><a href="#" className="hover:text-primary">Stack Overflow ↗</a></li>
            <li><a href="/resume.pdf" download="Aarav-Mehta-Resume.pdf" className="hover:text-primary">Résumé (PDF) ↗</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Based in
          </div>
          <address className="not-italic text-sm leading-relaxed text-muted-foreground">
            Bengaluru, IN — GMT+5:30
            <br />Remote-first, EU & US overlap
            <br />—
            <br />hello@aaravmehta.dev
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:px-10">
          <span>© 2019—2026 Aarav Mehta</span>
          <span>Built with care · Bengaluru ⇢ Everywhere</span>
        </div>
      </div>
    </footer>
  );
}
