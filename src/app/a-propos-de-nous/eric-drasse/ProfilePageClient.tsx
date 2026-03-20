"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { team } from "@/data/team";

const member = team[0]; // \u00c9ric Drasse

const experienceTimeline = [
  { year: "1998", text: "D\u00e9but de carri\u00e8re en orth\u00e9sie" },
  { year: "2005", text: "Sp\u00e9cialisation en \u00e9valuation biom\u00e9canique" },
  { year: "2011", text: "Fondation d\u2019Orth\u00e8se Conseil \u00e0 Chambly" },
  { year: "2018", text: "Ouverture du point de service \u00e0 Saint-C\u00e9saire" },
  { year: "2024", text: "Int\u00e9gration de nouvelles technologies de fabrication" },
];

export default function EricDrasseProfile() {
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
              \u00c0 propos d&apos;\u00c9ric
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
              <p>{member.bio}</p>
              <p>
                Fort de plus de 25 ans d&apos;exp\u00e9rience, \u00c9ric a d\u00e9velopp\u00e9 une expertise approfondie dans
                la conception et la fabrication d&apos;orth\u00e8ses sur mesure. Son approche m\u00e9ticuleuse et son souci
                du d\u00e9tail garantissent des r\u00e9sultats optimaux pour chaque patient.
              </p>
              <p>
                Passionn\u00e9 par l&apos;innovation, il int\u00e8gre continuellement les derni\u00e8res technologies et
                techniques dans sa pratique, tout en maintenant l&apos;approche humaine et personnalis\u00e9e qui fait
                la r\u00e9putation d&apos;Orth\u00e8se Conseil.
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
              Prendre rendez-vous avec \u00c9ric
            </h2>
            <p className="text-white/70 mb-8">
              Contactez-nous pour planifier votre consultation personnalis\u00e9e.
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
