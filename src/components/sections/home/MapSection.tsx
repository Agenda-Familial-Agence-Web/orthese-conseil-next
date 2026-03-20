"use client";

import { siteConfig } from "@/data/site";

export default function MapSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      {/* Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.123!2d-73.287!3d45.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a5e7d5a5a5a5%3A0x0!2s2082+Boulevard+Industriel%2C+Chambly%2C+QC!5e0!3m2!1sfr!2sca!4v1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte Orthèse Conseil Chambly"
      />

      {/* Overlay card */}
      <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-xl p-6 max-w-sm z-10">
        <h3 className="font-heading font-bold text-lg text-text-primary mb-3">
          Nos emplacements
        </h3>
        <ul className="space-y-3">
          {siteConfig.locations.map((location) => (
            <li key={location.name}>
              <p className="font-heading font-semibold text-sm text-text-primary">
                {location.name}
              </p>
              <p className="text-sm text-text-secondary">{location.address}</p>
              {location.note && (
                <p className="text-xs text-text-muted italic mt-0.5">
                  {location.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
