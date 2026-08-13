import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        >
          <div className="flex items-baseline gap-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-6xl md:text-8xl"
            >
              Aarav Mehta
            </motion.span>
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {String(pct).padStart(3, "0")}
            </span>
          </div>
          <div className="mt-8 h-px w-64 overflow-hidden bg-foreground/10">
            <motion.div
              className="h-full bg-foreground"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: pct / 100 }}
              transition={{ ease: "linear", duration: 0.1 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
