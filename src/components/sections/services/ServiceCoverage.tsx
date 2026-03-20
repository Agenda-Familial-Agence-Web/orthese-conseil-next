"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

interface ServiceCoverageProps {
  coverage: string[];
  serviceName: string;
}

export default function ServiceCoverage({
  coverage,
  serviceName,
}: ServiceCoverageProps) {
  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          badge="Remboursement"
          title="Couverture et remboursement"
          subtitle={`Découvrez les options de couverture disponibles pour ${serviceName.toLowerCase()}.`}
        />

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {coverage.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-10">
            <MagneticButton
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              Vérifier votre couverture
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
