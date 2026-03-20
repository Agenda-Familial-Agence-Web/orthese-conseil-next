import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Chaussures sur mesure' };

export default function ChaussuresSurMesurePage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/2082A-Boul-Industriel-01272026_105502.jpg" title="Chaussures sur mesure" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Chaussures sur mesure' }]} />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/chaussures-sur-mesure">
            <Image src="/images/chaussures-orthopediques.png" alt="Chaussures sur mesure" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>Trouvez enfin chaussure à votre pied</h2>
            <p>Chaussures thérapeutiques et semelles sur mesure conçues pour corriger la posture, soulager les douleurs et améliorer la biomécanique de la marche.</p>
            <p>Nos chaussures orthopédiques sont fabriquées avec des matériaux de qualité supérieure et personnalisées pour s&apos;adapter parfaitement à la morphologie de vos pieds.</p>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
