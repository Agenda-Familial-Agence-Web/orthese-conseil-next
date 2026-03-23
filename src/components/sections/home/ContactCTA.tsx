"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// JS getDay(): 0=Sunday, 1=Monday, ...6=Saturday
// siteConfig.hours: 0=Lundi(Monday), ...6=Dimanche(Sunday)
function getTodayIndex(): number {
  const jsDay = new Date().getDay();
  // Convert: JS Sunday(0)->6, Monday(1)->0, ..., Saturday(6)->5
  return jsDay === 0 ? 6 : jsDay - 1;
}

export default function ContactCTA() {
  const todayIndex = getTodayIndex();
  const primaryLocation = siteConfig.locations.find((l) => l.isPrimary);

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Clinic photo */}
        <ScrollReveal direction="left">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/clinic/clinique-02.jpg"
              alt="Clinique Orthèse Conseil à Chambly"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>

        {/* Right: Contact info */}
        <ScrollReveal direction="right">
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Prenez soin de vous dès aujourd&apos;hui
            </h2>

            {/* Phone */}
            <a
              href="tel:4504034116"
              className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors group"
            >
              <PhoneIcon />
              <span className="text-2xl font-heading font-bold group-hover:underline">
                450-403-4116
              </span>
            </a>

            {/* Address */}
            {primaryLocation && (
              <a
                href={primaryLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-text-secondary hover:text-primary transition-colors"
              >
                <MapPinIcon />
                <span className="text-lg">{primaryLocation.address}</span>
              </a>
            )}

            {/* Hours */}
            <div className="space-y-2">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                Heures d&apos;ouverture
              </h3>
              <ul className="space-y-1">
                {siteConfig.hours.map((entry, i) => (
                  <li
                    key={entry.day}
                    className={`flex justify-between py-1.5 px-3 rounded-lg text-sm ${
                      i === todayIndex
                        ? "bg-primary/10 font-bold text-text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    <span>{entry.day}</span>
                    <span>{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticButton href="/nous-joindre" className="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-colors">
                Prendre rendez-vous
              </MagneticButton>
              <MagneticButton href="tel:4504034116" className="inline-block px-8 py-4 border-2 border-primary text-primary font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
                Nous appeler
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
