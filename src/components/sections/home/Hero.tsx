"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import BlobBackground from "@/components/ui/BlobBackground";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves at 0.3x scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Content fades out and moves faster as user scrolls
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/clinic/hero-clinic.jpg"
          alt="Clinique Orthèse Conseil à Chambly"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,25,35,0.7), rgba(15,25,35,0.3))",
          }}
        />
      </motion.div>

      {/* Blob floating shapes */}
      <BlobBackground variant="mixed" count={3} />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ y: -30, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md border border-white/15">
            Clinique d&apos;orth&egrave;ses &agrave; Chambly
          </span>
        </motion.div>

        {/* Title */}
        <TextReveal
          tag="h1"
          variant="word"
          className="mt-6 max-w-4xl font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          delay={0.6}
        >
          Votre bien-être, notre expertise depuis 2011
        </TextReveal>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          &Eacute;ric et Marie, orth&eacute;sistes passionn&eacute;s avec 40+
          ans d&apos;exp&eacute;rience combin&eacute;e
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <MagneticButton
              href="/prendre-rendez-vous"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Prendre rendez-vous
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <MagneticButton
              href="/nos-services"
              className="inline-block rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-medium text-white transition-colors hover:border-white/60"
            >
              D&eacute;couvrir nos services
            </MagneticButton>
          </motion.div>
        </div>

        {/* Social proof bar */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>&#11088; 4.9/5 Google</span>
          <span className="hidden sm:inline" aria-hidden="true">
            &middot;
          </span>
          <span>98% recommand&eacute;</span>
          <span className="hidden sm:inline" aria-hidden="true">
            &middot;
          </span>
          <span>RAMQ &middot; SAAQ &middot; CNESST</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
