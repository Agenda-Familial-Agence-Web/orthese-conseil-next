"use client";

import { motion } from "framer-motion";

interface BlobBackgroundProps {
  variant?: "blue" | "green" | "mixed";
  count?: number;
  className?: string;
}

interface BlobConfig {
  size: number;
  top: string;
  left: string;
  opacity: number;
  delay: number;
  color: string;
}

const colorMap = {
  blue: ["var(--color-primary)", "var(--color-primary-light)"],
  green: ["var(--color-accent)", "var(--color-accent-light)"],
  mixed: ["var(--color-primary)", "var(--color-accent)", "var(--color-primary-light)"],
};

function getBlobConfigs(variant: "blue" | "green" | "mixed", count: number): BlobConfig[] {
  const colors = colorMap[variant];
  const configs: BlobConfig[] = [
    { size: 450, top: "-10%", left: "-5%", opacity: 0.08, delay: 0, color: colors[0] },
    { size: 350, top: "50%", left: "60%", opacity: 0.06, delay: 2, color: colors[1 % colors.length] },
    { size: 400, top: "20%", left: "30%", opacity: 0.05, delay: 4, color: colors[2 % colors.length] },
  ];
  return configs.slice(0, count);
}

export default function BlobBackground({
  variant = "blue",
  count = 2,
  className = "",
}: BlobBackgroundProps) {
  const blobs = getBlobConfigs(variant, Math.min(count, 3));

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute animate-blob-morph"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            backgroundColor: blob.color,
            opacity: blob.opacity,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animationDelay: `${blob.delay}s`,
            filter: "blur(60px)",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: blob.opacity }}
          transition={{ duration: 1.5, delay: blob.delay * 0.2, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
