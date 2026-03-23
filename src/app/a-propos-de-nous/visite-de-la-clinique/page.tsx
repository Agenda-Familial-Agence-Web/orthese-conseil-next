import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Visite de la clinique' };

export default function VisiteCliniquePage() {
  const photos = [
    { src: '/images/2082A-Boul-Industriel-01272026_105235.jpg', alt: 'Façade de la clinique' },
    { src: '/images/2082A-Boul-Industriel-01272026_105257.jpg', alt: 'Intérieur - Réception' },
    { src: '/images/2082A-Boul-Industriel-01272026_105316.jpg', alt: 'Salle de consultation' },
    { src: '/images/2082A-Boul-Industriel-01272026_105340.jpg', alt: 'Laboratoire de fabrication' },
    { src: '/images/2082A-Boul-Industriel-01272026_105417.jpg', alt: 'Salle d\'évaluation' },
    { src: '/images/2082A-Boul-Industriel-01272026_105502.jpg', alt: 'Espace d\'accueil' },
    { src: '/images/2082A-Boul-Industriel-Photo-1.jpg', alt: 'Vue extérieure' },
    { src: '/images/2082A-Boul-Industriel-Photo-4.jpg', alt: 'Vue de la clinique' },
  ];

  return (
    <>
      <HeroBanner
        title="Visite de la clinique"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Visite de la clinique' },
        ]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <div className="section-header">
            <h2>Découvrez notre clinique</h2>
            <p>Située au 2082 Boulevard Industriel à Chambly, notre clinique vous accueille dans un environnement moderne et chaleureux.</p>
          </div>
          <div className={styles.galleryGrid}>
            {photos.map((photo, i) => (
              <Image
                key={i}
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
