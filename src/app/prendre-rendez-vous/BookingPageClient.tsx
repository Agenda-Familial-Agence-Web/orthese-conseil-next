"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingForm from "@/components/ui/BookingForm";
import { siteConfig } from "@/data/site";

export default function BookingPageClient() {
  const primary = siteConfig.locations[0];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[30vh] min-h-[240px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-primary-dark" />
        <motion.h1
          className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Prendre rendez-vous
        </motion.h1>
      </section>

      {/* Booking form */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <BookingForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Call CTA */}
      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <div className="bg-warm-gray rounded-2xl p-8 md:p-12">
              <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                Vous préférez nous appeler?
              </h2>
              <a
                href={`tel:${siteConfig.phone.office.replace(/-/g, "")}`}
                className="inline-flex items-center gap-3 text-3xl md:text-4xl font-heading font-bold text-primary hover:text-primary-dark transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                {siteConfig.phone.office}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-warm-gray rounded-2xl p-8 md:p-12">
              <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                Ou passez nous voir
              </h2>
              <a
                href={primary.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg text-primary hover:text-primary-dark transition-colors"
              >
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {primary.address}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
