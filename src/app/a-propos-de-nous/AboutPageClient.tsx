"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TeamCard from "@/components/ui/TeamCard";
import PhotoGallery from "@/components/ui/PhotoGallery";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { team, teamPhoto } from "@/data/team";

const timeline = [
  { year: "2011", text: "Fondation d’Orthèse Conseil par Éric Drasse" },
  { year: "2013", text: "Arrivée de Marie Lefebvre" },
  { year: "2015", text: "Expansion des services pédiatriques" },
  { year: "2018", text: "Ouverture du point de service à Saint-Césaire" },
  { year: "2024", text: "Modernisation de la clinique et nouvelles technologies" },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Approche humaine",
    text: "À l’écoute de vos besoins, nous prenons le temps de bien comprendre votre condition pour offrir un traitement véritablement personnalisé.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h11.18M4.93 19.07h14.14" />
      </svg>
    ),
    title: "Fabrication sur place",
    text: "Nos orthèses sont fabriquées directement dans notre atelier, ce qui garantit un contrôle de qualité rigoureux et des ajustements rapides.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Suivi personnalisé",
    text: "Nous assurons un suivi complet après la livraison de vos orthèses pour garantir votre confort et l’efficacité du traitement.",
  },
];

const clinicPhotos = [
  { src: "/images/clinic/bureau-consultation.jpg", alt: "Bureau de consultation" },
  { src: "/images/clinic/salle-attente.jpg", alt: "Salle d’attente" },
  { src: "/images/clinic/clinique-01.jpg", alt: "Clinique Orthèse Conseil" },
  { src: "/images/clinic/clinique-02.jpg", alt: "Clinique Orthèse Conseil" },
  { src: "/images/clinic/clinique-03.jpg", alt: "Clinique Orthèse Conseil" },
  { src: "/images/clinic/clinique-04.jpg", alt: "Clinique Orthèse Conseil" },
];

const insurances = ["RAMQ", "SAAQ", "CNESST", "MSSS"];

export default function AboutPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={teamPhoto}
            alt="Équipe Orthèse Conseil"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center">
              À propos de nous
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Notre histoire - Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            badge="Notre histoire"
            title="Depuis 2011, au service de votre bien-être"
            subtitle="Une clinique fondée sur la passion de l’orthésie et le désir d’aider."
          />

          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <ScrollReveal
                key={item.year}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 ring-4 ring-white" />

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="font-heading text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                    <p className="mt-1 text-text-secondary text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <AnimatedCounter target={40} suffix="+" className="font-heading text-4xl md:text-5xl font-bold" />
            <p className="mt-2 text-white/70 text-sm">Années d’expérience combinée</p>
          </div>
          <div>
            <AnimatedCounter target={2} className="font-heading text-4xl md:text-5xl font-bold" />
            <p className="mt-2 text-white/70 text-sm">Points de service</p>
          </div>
          <div>
            <AnimatedCounter target={4.9} suffix="/5" className="font-heading text-4xl md:text-5xl font-bold" />
            <p className="mt-2 text-white/70 text-sm">Note Google</p>
          </div>
          <div>
            <AnimatedCounter target={98} suffix="%" className="font-heading text-4xl md:text-5xl font-bold" />
            <p className="mt-2 text-white/70 text-sm">Recommandé sur Facebook</p>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            badge="L’équipe"
            title="Des professionnels dévoués"
            subtitle="Rencontrez les orthésistes qui prennent soin de vous."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <ScrollReveal key={member.slug}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            badge="Notre approche"
            title="Ce qui nous distingue"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-warm-gray hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visite de la clinique */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="Nos installations"
            title="Visite de la clinique"
            subtitle="Un environnement moderne et accueillant pour votre confort."
          />
          <div className="mt-16">
            <PhotoGallery photos={clinicPhotos} />
          </div>
        </div>
      </section>

      {/* Reconnaissances */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            badge="Reconnaissances"
            title="Agréé par les organismes publics"
            subtitle="Nos services sont couverts par les principaux régimes d’assurance."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {insurances.map((name) => (
              <ScrollReveal key={name}>
                <div className="flex items-center justify-center w-32 h-20 rounded-xl bg-warm-gray border border-gray-200 shadow-sm">
                  <span className="font-heading text-lg font-bold text-text-primary">
                    {name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
