"use client";

import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Service } from "@/data/services";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Nos services", href: "/nos-services" },
    { label: service.name },
  ];

  return (
    <section className="relative h-[50vh] md:h-[60vh] flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={service.heroImage}
        alt={service.name}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-5xl">
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <TextReveal
          variant="word"
          tag="h1"
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {service.name}
        </TextReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
