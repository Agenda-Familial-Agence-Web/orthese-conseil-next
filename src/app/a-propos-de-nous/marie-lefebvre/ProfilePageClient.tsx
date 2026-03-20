"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { team } from "@/data/team";

const member = team[1]; // Marie Lefebvre

const experienceTimeline = [
  { year: "2003", text: "Début de pratique en massothérapie" },
  { year: "2006", text: "Formation complémentaire en orthésie" },
  { year: "2010", text: "Spécialisation en soins pédiatriques" },
  { year: "2013", text: "Arrivée chez Orthèse Conseil" },
  { year: "2020", text: "Développement du programme de réhabilitation intégré" },
];

export default function MarieLefebvreProfile() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] overflow-hidden bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <motion.div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto"
              style={{ y: heroY }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </ScrollReveal>

          {/* Info */}
          <div>
            <ScrollReveal>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-light mb-4">
                Profil
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white">
                {member.name}
              </h1>
              <p className="mt-2 text-xl text-white/70">
                {member.title} &middot; {member.experience}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 border border-white/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-2">
                {member.certifications.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-accent/20 px-4 py-1.5 text-sm text-accent-light font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8">
              À propos de Marie
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
              <p>{member.bio}</p>
              <p>
                Grâce à sa double formation en orthésie et en massothérapie, Marie offre une approche
                globale et complémentaire du traitement. Elle comprend non seulement les aspects
                biomécaniques, mais aussi les tensions musculaires et les déséquilibres qui peuvent
                affecter la posture et le mouvement.
              </p>
              <p>
                Particulièrement dévouée aux soins pédiatriques, Marie accompagne les jeunes patients
                et leurs familles avec patience et bienveillance, assurant un suivi adapté à chaque
                étape de leur croissance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Parcours professionnel
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20" />
            {experienceTimeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div className="relative flex items-start mb-10 ml-14">
                  <div className="absolute -left-8 w-4 h-4 bg-primary rounded-full ring-4 ring-warm-gray top-1" />
                  <div>
                    <span className="font-heading text-xl font-bold text-primary">{item.year}</span>
                    <p className="mt-1 text-text-secondary text-lg">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Prendre rendez-vous avec Marie
            </h2>
            <p className="text-white/70 mb-8">
              Contactez-nous pour planifier votre consultation personnalisée.
            </p>
            <MagneticButton
              href="/contact"
              className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Prendre rendez-vous
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
