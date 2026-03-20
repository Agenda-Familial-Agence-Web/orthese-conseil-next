"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PhotoGallery from "@/components/ui/PhotoGallery";

const clinicPhotos = [
  { src: "/images/clinic/bureau-consultation.jpg", alt: "Bureau de consultation" },
  { src: "/images/clinic/salle-attente.jpg", alt: "Salle d\u2019attente" },
  { src: "/images/clinic/clinique-01.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Vue 1" },
  { src: "/images/clinic/clinique-02.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Vue 2" },
  { src: "/images/clinic/clinique-03.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Vue 3" },
  { src: "/images/clinic/clinique-04.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Vue 4" },
  { src: "/images/clinic/clinique-05.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Vue 5" },
  { src: "/images/clinic/clinique-06.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Vue 6" },
  { src: "/images/clinic/hero-clinic.jpg", alt: "Clinique Orth\u00e8se Conseil \u2014 Ext\u00e9rieur" },
];

export default function VisiteCliniqueClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/images/clinic/hero-clinic.jpg"
            alt="Clinique Orth\u00e8se Conseil"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white text-center">
              Visite de la clinique
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xl text-text-secondary leading-relaxed">
              Notre clinique situ\u00e9e au 2082 Boulevard Industriel \u00e0 Chambly offre un environnement
              moderne, lumineux et accueillant. D\u00e9couvrez nos installations con\u00e7ues pour votre
              confort et votre bien-\u00eatre.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-6xl mx-auto">
          <PhotoGallery photos={clinicPhotos} />
        </div>
      </section>
    </>
  );
}
