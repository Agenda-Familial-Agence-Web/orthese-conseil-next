'use client';

import ScrollReveal from '@/components/ScrollReveal';
import TestimonialCard from '@/components/ui/TestimonialCard';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { testimonials } from '@/data/testimonials';
import { siteConfig } from '@/data/site';

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Ce que nos patients disent</h2>
            <p>
              Note de {siteConfig.googleRating}/5 sur Google — {siteConfig.facebookRecommended}% nous recommandent sur Facebook.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <InfiniteMarquee speed={50}>
          {row1.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </InfiniteMarquee>
        <InfiniteMarquee speed={45} reverse>
          {row2.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </InfiniteMarquee>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: 40 }}>
        <ScrollReveal delay={0.2}>
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            Voir tous les avis Google →
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
