'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Accordion from '@/components/ui/Accordion';
import { faq } from '@/data/faq';

export default function FAQ() {
  return (
    <section className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Questions fréquentes</h2>
            <p>Trouvez rapidement les réponses à vos questions les plus courantes.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion items={faq} />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ marginBottom: 16 }}>Vous avez une autre question?</p>
            <Link href="/nous-joindre" className="btn btn-primary btn-sm">
              Contactez-nous
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
