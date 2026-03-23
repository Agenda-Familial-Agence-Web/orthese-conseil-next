"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DotNavigationProps {
  items: { id: string; label: string }[];
}

export default function DotNavigation({ items }: DotNavigationProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-4"
      aria-label="Navigation des sections"
    >
      {items.map(({ id, label }) => {
        const isActive = activeId === id;
        const isHovered = hoveredId === id;

        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label={label}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-text-secondary font-body whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.span
              className="block rounded-full"
              animate={{
                width: isActive ? 12 : 10,
                height: isActive ? 12 : 10,
                backgroundColor: isActive
                  ? "var(--color-primary)"
                  : "rgba(255,255,255,0.3)",
                scale: isActive ? 1.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: isActive
                  ? "0 0 8px rgba(46,109,180,0.4)"
                  : "none",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
