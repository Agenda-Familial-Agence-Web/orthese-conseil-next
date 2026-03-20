"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Témoignages"
          title="Ce que nos patients disent"
        />

        {/* Google badge */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center mt-8 mb-12">
            <div className="inline-flex items-center gap-2 bg-warm-gray rounded-full px-4 py-2">
              {/* Google "G" logo */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-medium text-text-primary">
                {siteConfig.googleRating}/5 · Basé sur les avis vérifiés
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Marquee rows */}
        <div className="flex flex-col gap-6">
          <InfiniteMarquee direction="left" speed={35}>
            {row1.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                rating={t.rating}
                text={t.text}
                source={t.source}
              />
            ))}
          </InfiniteMarquee>

          <InfiniteMarquee direction="right" speed={40}>
            {row2.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                rating={t.rating}
                text={t.text}
                source={t.source}
              />
            ))}
          </InfiniteMarquee>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex justify-center mt-12">
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-1"
            >
              Voir tous nos avis sur Google
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
