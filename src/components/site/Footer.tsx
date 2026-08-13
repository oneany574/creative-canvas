export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-6 py-16 md:px-10 md:py-24">
        <div className="col-span-12 md:col-span-5">
          <div className="font-display text-6xl md:text-8xl">Aarav Mehta.</div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            An independent design studio moving quietly between brand, product,
            and experience.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Navigate
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#work" className="hover:text-accent">Work</a></li>
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#studio" className="hover:text-accent">Studio</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Elsewhere
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Instagram ↗</a></li>
            <li><a href="#" className="hover:text-accent">Are.na ↗</a></li>
            <li><a href="#" className="hover:text-accent">LinkedIn ↗</a></li>
            <li><a href="#" className="hover:text-accent">Read.cv ↗</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Studios
          </div>
          <address className="not-italic text-sm leading-relaxed text-muted-foreground">
            Rua da Boavista 84, 3º
            <br />1200-069 Lisbon, PT
            <br />—
            <br />55 Water St, Brooklyn
            <br />NY 11201, USA
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:px-10">
          <span>© 2019—2026 Aarav Mehta</span>
          <span>Made with intention · Lisbon ⇢ Everywhere</span>
        </div>
      </div>
    </footer>
  );
}
