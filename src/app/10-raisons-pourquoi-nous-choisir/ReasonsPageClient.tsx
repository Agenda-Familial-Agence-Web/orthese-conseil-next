"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { reasons } from "@/data/reasons";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DotNavigation from "@/components/ui/DotNavigation";
import MagneticButton from "@/components/ui/MagneticButton";

const pad = (n: number) => String(n).padStart(2, "0");

const dotItems = reasons.map((r) => ({
  id: `reason-${pad(r.number)}`,
  label: `${pad(r.number)} — ${r.title}`,
}));

export default function ReasonsPageClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    reasons.forEach((r, i) => {
      const el = document.getElementById(`reason-${pad(r.number)}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-dark overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <TextReveal
            variant="word"
            tag="h1"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            10 raisons de nous choisir
          </TextReveal>
        </div>
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50" />
      </section>

      {/* Sticky counter */}
      <motion.div
        className="fixed top-28 left-6 z-50 hidden md:flex items-baseline gap-1 font-heading font-bold text-primary/80"
        key={activeIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-3xl">{pad(activeIndex + 1)}</span>
        <span className="text-lg text-text-muted">/ 10</span>
      </motion.div>

      {/* Dot navigation */}
      <DotNavigation items={dotItems} />

      {/* Reason sections */}
      {reasons.map((reason, i) => {
        const isEven = i % 2 === 1;
        const bgClass = isEven ? "bg-warm-gray" : "bg-white";

        return (
          <section
            key={reason.number}
            id={`reason-${pad(reason.number)}`}
            className={`relative min-h-[80vh] flex items-center overflow-hidden ${bgClass}`}
          >
            {/* Watermark number */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-heading font-bold text-text-primary/[0.04] select-none pointer-events-none leading-none"
              aria-hidden="true"
            >
              {pad(reason.number)}
            </span>

            {/* Content */}
            <div
              className={`relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex ${
                isEven ? "flex-row-reverse" : "flex-row"
              } items-center`}
            >
              <ScrollReveal
                direction={isEven ? "right" : "left"}
                delay={0.1}
                className="max-w-2xl"
              >
                {/* Number badge */}
                <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  Raison {pad(reason.number)}
                </span>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                  {reason.title}
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="bg-dark py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
        <ScrollReveal direction="up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
            Convaincu?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <MagneticButton
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Prendre rendez-vous
          </MagneticButton>
        </ScrollReveal>
      </section>
    </>
  );
}
