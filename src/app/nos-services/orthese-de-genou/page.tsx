import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Orthèses de genou' };

export default function OrtheseGenouPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/orthese-de-genou-hero.jpg" title="Orthèses de genou" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Orthèses de genou' }]} />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/orthese-de-genou">
            <Image src="/images/orthèse de genou.jpg" alt="Orthèse de genou" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>Nous apportons le soutien nécessaire à votre mobilité</h2>
            <p>Appareillage orthopédique personnalisé pour stabiliser votre mobilité, soulager la douleur et favoriser la guérison suite à une blessure ou condition du genou.</p>
            <p>Nos orthèses de genou sont fabriquées sur mesure pour s&apos;adapter parfaitement à votre morphologie et à vos besoins spécifiques.</p>
            <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: 24, marginTop: 24 }}>
              <h3 style={{ color: 'var(--blue-primary)', marginBottom: 8 }}>Consultation</h3>
              <p>Appelez-nous au <a href="tel:450-403-4116" style={{ fontWeight: 600 }}>450 403-4116</a> ou remplissez <a href="/demande-de-consultation" style={{ fontWeight: 600 }}>notre formulaire</a>.</p>
            </div>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
