"use client";

import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Ce que nous offrons"
          title="Nos services"
          subtitle="Des solutions orthopediques personnalisees pour ameliorer votre qualite de vie au quotidien."
        />

        {/* Mobile: horizontal scroll / sm+: grid */}
        <div className="mt-12 md:mt-16">
          {/* Mobile scrollable container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 sm:hidden">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="snap-start shrink-0 w-[75vw] max-w-[300px]"
              >
                <ServiceCard
                  name={service.name}
                  shortDescription={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* sm+ grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.slug}
                direction="up"
                delay={index * 0.1}
              >
                <ServiceCard
                  name={service.name}
                  shortDescription={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/nos-services"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all"
            >
              Decouvrir tous nos services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
