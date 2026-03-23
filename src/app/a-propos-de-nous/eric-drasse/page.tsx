import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: 'Éric Drasse — Orthésiste',
  description: 'Éric Drasse, orthésiste certifié avec plus de 25 ans d\'expérience. Fondateur d\'Orthèse Conseil à Chambly.',
};

export default function EricDrassePage() {
  return (
    <>
      <HeroBanner
        title="Éric Drasse"
        breadcrumbs={[
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Éric Drasse' },
        ]}
      />

      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>Orthésiste T.P. certifié</span>
              <h2>Éric Drasse, fondateur d&apos;Orthèse Conseil</h2>
              <blockquote style={{ borderLeft: '4px solid var(--blue-primary)', paddingLeft: 20, fontStyle: 'italic', color: 'var(--text-secondary)', margin: '8px 0' }}>
                &laquo; Mon objectif est de redonner aux gens leur mobilité et leur qualité de vie, un patient à la fois. &raquo;
              </blockquote>
              <p>
                Éric Drasse est orthésiste depuis plus de 25 ans. Passionné par son métier, il a fondé Orthèse Conseil en 2011 avec la vision d&apos;offrir des soins orthopédiques personnalisés et de haute qualité.
              </p>
              <p>
                Son expertise couvre l&apos;ensemble des orthèses des membres inférieurs et supérieurs, avec une approche centrée sur le patient. Membre de l&apos;OTPQ et de l&apos;AOPQ, il se spécialise dans les orthèses plantaires, les orthèses de genou et les évaluations biomécaniques.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a href="tel:450-403-4116" className="btn btn-primary btn-sm">Appeler</a>
                <a href="mailto:info@ortheseconseil.com" className="btn btn-secondary btn-sm">Courriel</a>
              </div>
            </div>
            <Image
              src="/images/team/eric-et-marie-comptoir.jpg"
              alt="Éric Drasse"
              width={500}
              height={400}
              className={styles.contentImage}
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
