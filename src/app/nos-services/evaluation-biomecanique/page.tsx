import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Évaluation biomécanique' };

export default function EvaluationBiomecPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/%C3%89valuation%20biomechanique.jpg"
        title="Évaluation biomécanique"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Évaluation biomécanique' }]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/evaluation-biomecanique">
            <Image src="/images/Évaluation biomechanique.jpg" alt="Évaluation biomécanique" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>À votre arrivée à la clinique, tout commence par une bonne évaluation.</h2>
            <p>L&apos;évaluation biomécanique de chaque patient nous permet de mieux évaluer les diverses solutions qui s&apos;offrent à vous pour qu&apos;à la fin du processus, vous soyez tout simplement bien.</p>
            <p>Afin de bien évaluer les différentes solutions disponibles lors de votre arrivée à la clinique, il est primordial d&apos;effectuer une évaluation biomécanique pour identifier vos inconforts.</p>
            <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: 24, marginTop: 24 }}>
              <h3 style={{ color: 'var(--blue-primary)', marginBottom: 8 }}>Vous n&apos;avez jamais consulté un orthésiste?</h3>
              <p>Appelez-nous au <a href="tel:450-403-4116" style={{ fontWeight: 600 }}>450 403-4116</a> pour demander une consultation ou remplissez <a href="/demande-de-consultation" style={{ fontWeight: 600 }}>notre formulaire en ligne</a>.</p>
            </div>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
