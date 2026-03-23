"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Service } from "@/data/services";

interface ServicesPageClientProps {
  services: Service[];
}

export default function ServicesPageClient({
  services,
}: ServicesPageClientProps) {
  return (
    <>
      {/* Short hero */}
      <section className="relative h-[30vh] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-dark opacity-80" />
        <div className="relative z-10 text-center px-6">
          <TextReveal
            variant="word"
            tag="h1"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Nos services
          </TextReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} direction="up" delay={i * 0.08}>
              <Link href={`/nos-services/${service.slug}`} className="block group">
                <motion.div
                  className="relative rounded-2xl overflow-hidden h-[320px] bg-dark"
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Image */}
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Icon */}
                    <div className="w-10 h-10 relative mb-3">
                      <Image
                        src={service.icon}
                        alt=""
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>

                    <h2 className="font-heading text-xl font-semibold text-white">
                      {service.name}
                    </h2>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">
                      {service.shortDescription}
                    </p>

                    {/* Arrow */}
                    <div className="mt-3 flex items-center gap-2 text-accent-light text-sm font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      En savoir plus
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
