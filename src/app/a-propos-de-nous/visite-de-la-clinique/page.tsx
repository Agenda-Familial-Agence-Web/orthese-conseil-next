import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: 'Visite de la clinique',
  description: 'Visitez la clinique Orthèse Conseil à Chambly. Découvrez nos installations modernes au 2082 Boulevard Industriel.',
};

const photos = [
  { src: '/images/clinic/facade.jpg', alt: 'Façade de la clinique Orthèse Conseil' },
  { src: '/images/clinic/reception.jpg', alt: 'Réception de la clinique' },
  { src: '/images/clinic/consultation.jpg', alt: 'Salle de consultation' },
  { src: '/images/clinic/fabrication.jpg', alt: 'Atelier de fabrication' },
  { src: '/images/clinic/evaluation.jpg', alt: 'Salle d\'évaluation' },
  { src: '/images/clinic/accueil.jpg', alt: 'Zone d\'accueil' },
];

export default function VisiteCliniquePage() {
  return (
    <>
      <HeroBanner
        title="Visite de la clinique"
        breadcrumbs={[
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Visite de la clinique' },
        ]}
      />

      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.textContent} style={{ maxWidth: 700, margin: '0 auto 48px', textAlign: 'center' }}>
            <h2>Nos installations à Chambly</h2>
            <p>
              Notre clinique est située au 2082 Boulevard Industriel à Chambly. Découvrez nos espaces modernes et accueillants, conçus pour votre confort.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {photos.map((photo, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
