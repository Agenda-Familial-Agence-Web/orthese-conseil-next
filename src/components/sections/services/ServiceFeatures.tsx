"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="section-padding bg-warm-gray">
      <SectionHeading
        badge="Caractéristiques"
        title="Ce qui nous distingue"
        subtitle="Des solutions personnalisées pour répondre à vos besoins spécifiques."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              {/* Icon area */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>

              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
