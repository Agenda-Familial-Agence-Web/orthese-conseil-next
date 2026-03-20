"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButton";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/nos-services", hasMega: true },
  { label: "À propos", href: "/a-propos-de-nous" },
  { label: "Contact", href: "/nous-joindre" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/[0.03]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 h-20">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <Image
              src="/images/logos/logo.png"
              alt="Orthèse Conseil"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                  onMouseLeave={() => link.hasMega && setMegaOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive
                        ? "text-primary"
                        : scrolled
                          ? "text-text-primary hover:text-primary"
                          : "text-white hover:text-white/80"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Mega menu for Services */}
                  {link.hasMega && (
                    <AnimatePresence>
                      {megaOpen && (
                        <MegaMenu onClose={() => setMegaOpen(false)} />
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              href="/prendre-rendez-vous"
              className="bg-primary text-white font-medium text-sm rounded-full px-6 py-3 hover:bg-primary-dark transition-colors duration-200"
            >
              Prendre rendez-vous
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center ${
              scrolled ? "text-text-primary" : "text-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 4, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3 }}
                className="block h-0.5 bg-current rounded-full origin-center"
                style={{ width: 20 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 bg-current rounded-full"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -4, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3 }}
                className="block h-0.5 bg-current rounded-full origin-center"
                style={{ width: 20 }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />}
      </AnimatePresence>
    </>
  );
}
