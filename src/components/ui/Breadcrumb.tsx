"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Fil d'Ariane"
      className="flex items-center gap-2 text-sm"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-white/40">&gt;</span>}
            {isLast || !item.href ? (
              <span className="text-white font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </motion.nav>
  );
}
