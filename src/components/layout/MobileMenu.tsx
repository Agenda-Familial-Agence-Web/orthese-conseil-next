"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/nos-services" },
  { label: "À propos", href: "/a-propos-de-nous" },
  { label: "Contact", href: "/nous-joindre" },
  { label: "Prendre rendez-vous", href: "/prendre-rendez-vous" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: 10 },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer le menu"
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col items-center gap-8"
      >
        {links.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              onClick={onClose}
              className="text-white text-3xl font-heading font-semibold hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}
