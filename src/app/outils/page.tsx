import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Outils' };

export default function OutilsPage() {
  return (
    <>
      <HeroBanner
        title="Outils"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Outils' }]}
      />
      <section className={styles.pageContent}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className={styles.contactCard} style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>Création d&apos;ordonnance</h2>
            <p style={{ marginBottom: 32 }}>
              Pour les prescripteurs, utilisez l&apos;outil de l&apos;AOPQ pour créer des ordonnances en ligne. Cet outil simplifie le processus d&apos;ordonnance pour les appareils orthopédiques.
            </p>
            <a
              href="https://ordonnance.aopq.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Accéder à l&apos;outil d&apos;ordonnance AOPQ
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
