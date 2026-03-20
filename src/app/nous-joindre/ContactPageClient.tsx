"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/data/site";

const dayMap: Record<number, string> = {
  0: "Dimanche",
  1: "Lundi",
  2: "Mardi",
  3: "Mercredi",
  4: "Jeudi",
  5: "Vendredi",
  6: "Samedi",
};

export default function ContactPageClient() {
  const todayName = dayMap[new Date().getDay()];
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
          Nous joindre
        </motion.h1>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-text-secondary mb-8">
                  Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right: Contact info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-3">
                    Téléphone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phone.office.replace(/-/g, "")}`}
                    className="text-2xl font-heading font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    {siteConfig.phone.office}
                  </a>
                  <br />
                  <a
                    href={`tel:${siteConfig.phone.mobile.replace(/-/g, "")}`}
                    className="text-lg text-text-secondary hover:text-primary transition-colors"
                  >
                    {siteConfig.phone.mobile} (mobile)
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-3">
                    Courriel
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg text-primary hover:text-primary-dark transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-3">
                    Adresse
                  </h3>
                  <a
                    href={primary.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors"
                  >
                    {primary.address}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-3">
                    Heures d&apos;ouverture
                  </h3>
                  <div className="bg-warm-gray rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {siteConfig.hours.map((h) => (
                          <tr
                            key={h.day}
                            className={`border-b border-gray-200 last:border-0 ${
                              h.day === todayName
                                ? "bg-primary/5 font-semibold"
                                : ""
                            }`}
                          >
                            <td className="px-4 py-3">
                              <span className="flex items-center gap-2">
                                {h.day === todayName && (
                                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                                )}
                                {h.day}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right">
                              {h.hours}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    title="Orthèse Conseil — Chambly"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.8!2d-73.287!3d45.447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI2JzQ5LjIiTiA3M8KwMTcnMTMuMiJX!5e0!3m2!1sfr!2sca!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
