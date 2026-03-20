"use client";

import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Service } from "@/data/services";

interface ServiceIntroProps {
  service: Service;
}

export default function ServiceIntro({ service }: ServiceIntroProps) {
  return (
    <section className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <ScrollReveal direction="left">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={service.heroImage}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Right: Text */}
        <div>
          <TextReveal
            variant="word"
            tag="h2"
            className="font-heading text-3xl md:text-4xl font-bold text-text-primary leading-tight"
          >
            {service.name}
          </TextReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
