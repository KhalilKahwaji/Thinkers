// app/components/Reveal.tsx
import { useEffect, useRef, useState } from "react";

type Variant = "up" | "right" | "left" | "zoom";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** initial motion style */
  variant?: Variant;
  /** delay in ms for staggering */
  delay?: number;
  /** intersection threshold (0..1) */
  threshold?: number;
  /** if false, the element will hide again when scrolled out */
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const mq = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) {
      setVisible(true);
      return;
    }
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
