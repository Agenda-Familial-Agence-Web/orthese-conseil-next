"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import { Service } from "@/data/services";

interface OtherServicesProps {
  services: Service[];
}

export default function OtherServices({ services }: OtherServicesProps) {
  // Show up to 4 other services
  const displayed = services.slice(0, 4);

  return (
    <section className="section-padding">
      <SectionHeading
        badge="Explorer"
        title="Nos autres services"
        subtitle="Découvrez l'ensemble de nos services orthopédiques."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayed.map((service, i) => (
          <ScrollReveal key={service.slug} direction="up" delay={i * 0.1}>
            <ServiceCard
              name={service.name}
              shortDescription={service.shortDescription}
              icon={service.icon}
              slug={service.slug}
              index={i}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
