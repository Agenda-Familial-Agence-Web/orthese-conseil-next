import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Bas de contention' };

export default function BasContentionPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/2082A-Boul-Industriel-01272026_105417.jpg" title="Bas de contention" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Bas de contention' }]} />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/bas-de-contention">
            <Image src="/images/bas_contention.png" alt="Bas de contention" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>Améliorer votre circulation sanguine</h2>
            <p>Œdèmes, problèmes de pression? Nous avons un vaste inventaire de bas de contention.</p>
            <p>Bas thérapeutiques gradués pour améliorer la circulation sanguine, réduire l&apos;enflure et prévenir les problèmes de pression. Nous offrons une variété de modèles de la marque Sigvaris pour répondre à tous vos besoins.</p>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
