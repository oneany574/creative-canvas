import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const hover = target?.closest<HTMLElement>("[data-cursor]");
      if (hover) {
        setActive(true);
        setLabel(hover.dataset.cursor || null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{
          width: active ? 84 : 12,
          height: active ? 84 : 12,
          backgroundColor: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="flex items-center justify-center rounded-full"
      >
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-widest text-black">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
