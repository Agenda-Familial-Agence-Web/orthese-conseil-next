"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TransitionOverlayProps {
  isActive: boolean;
}

export default function TransitionOverlay({ isActive }: TransitionOverlayProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#2E6DB4] pointer-events-none"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
