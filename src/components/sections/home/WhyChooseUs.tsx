"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlobBackground from "@/components/ui/BlobBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import { reasons } from "@/data/reasons";

const displayReasons = reasons.slice(0, 6);

function ReasonNumber({ number }: { number: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const formatted = String(number).padStart(2, "0");

  return (
    <span
      ref={ref}
      className="block text-7xl md:text-8xl font-heading font-bold select-none transition-all duration-700"
      style={{
        WebkitTextStroke: isInView ? "2px transparent" : "2px rgba(255,255,255,0.2)",
        color: isInView ? "#5BB356" : "transparent",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {formatted}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-dark overflow-hidden section-padding">
      <BlobBackground variant="blue" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          dark
          badge="Pourquoi nous"
          title="Pourquoi choisir Orthèse Conseil ?"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayReasons.map((reason, index) => (
            <ScrollReveal
              key={reason.number}
              direction="up"
              delay={index * 0.1}
              className={index % 2 === 1 ? "lg:mt-8" : ""}
            >
              <div>
                <ReasonNumber number={reason.number} />
                <h3 className="text-xl font-heading font-semibold text-white mt-4">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-sm mt-2">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <MagneticButton
            href="/prendre-rendez-vous"
            className="bg-accent text-white rounded-full px-8 py-4 text-lg font-semibold"
          >
            Prendre rendez-vous
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
