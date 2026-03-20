import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Attelle et orthèse du poignet' };

export default function AttellePoignetPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/Orth%C3%A8se%20du%20poignet.jpg" title="Attelle et orthèse du poignet" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Attelle du poignet' }]} />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/attelle-poignet">
            <Image src="/images/Orthèse du poignet.jpg" alt="Attelle de poignet" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>Retrouver votre mobilité</h2>
            <p>Lorsqu&apos;il est affaibli ou blessé, une attelle ou une orthèse peut devenir votre meilleur allié pour favoriser la guérison et retrouver votre mobilité.</p>
            <p>Nos attelles et orthèses du poignet sont sélectionnées et ajustées avec soin par nos orthésistes pour répondre exactement à vos besoins, que ce soit suite à une blessure, une chirurgie ou pour une condition chronique.</p>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
