"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TeamCard from "@/components/ui/TeamCard";
import { team, teamPhoto } from "@/data/team";

export default function About() {
  return (
    <section id="about" className="bg-warm-gray">
      {/* Part 1 — Notre histoire */}
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Photo */}
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={teamPhoto}
                  alt="Éric et Marie au comptoir de la clinique Orthèse Conseil"
                  width={720}
                  height={540}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </ScrollReveal>

            {/* Right — Text */}
            <ScrollReveal direction="right">
              <div>
                {/* Badge */}
                <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
                  Depuis 2011
                </span>

                <TextReveal
                  variant="word"
                  tag="h2"
                  className="font-heading text-4xl md:text-5xl font-bold leading-tight text-text-primary"
                  delay={0.1}
                >
                  Une approche humaine, des résultats concrets
                </TextReveal>

                <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                  Chez Orthèse Conseil, chaque patient est unique. Nous combinons
                  expertise clinique, technologies de pointe et écoute attentive pour
                  offrir des solutions orthopédiques sur mesure. Notre mission :
                  améliorer votre mobilité et votre qualité de vie, un pas à la fois.
                </p>

                {/* Counters */}
                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <AnimatedCounter
                      target={40}
                      suffix="+"
                      className="block font-heading text-4xl font-bold text-primary"
                    />
                    <span className="mt-1 block text-sm text-text-secondary">
                      ans d&apos;expérience
                    </span>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter
                      target={2}
                      className="block font-heading text-4xl font-bold text-primary"
                    />
                    <span className="mt-1 block text-sm text-text-secondary">
                      cliniques
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block font-heading text-4xl font-bold text-primary">
                      4.9/5
                    </span>
                    <span className="mt-1 block text-sm text-text-secondary">
                      étoiles
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Part 2 — L'équipe */}
      <div className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <ScrollReveal direction="up">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent mb-4">
                L&apos;équipe
              </span>
            </ScrollReveal>
            <TextReveal
              variant="word"
              tag="h2"
              className="font-heading text-4xl md:text-5xl font-bold leading-tight text-text-primary mx-auto"
              delay={0.1}
            >
              Des experts passionnés à votre service
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.slug} direction="up" delay={i * 0.15}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
