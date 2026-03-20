import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Profil de Marie Lefebvre, Orthésiste T.P Certifiée' };

export default function MarieLefebvrePage() {
  return (
    <>
      <HeroBanner
        title="Profil de Marie Lefebvre"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Marie Lefebvre' },
        ]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <Image
              src="/images/Marie.jpg"
              alt="Marie Lefebvre, Orthésiste"
              width={480}
              height={600}
              className={styles.contentImage}
            />
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>Orthésiste T.P certifiée</span>
              <h2>Marie Lefebvre</h2>
              <p>
                Avec plus de 15 ans d&apos;expérience dans le domaine de l&apos;orthèse, Marie Lefebvre apporte une perspective dynamique et innovante à la clinique. Elle aime mettre à profit ses connaissances des nouvelles technologies pour offrir ce qui se fait de mieux à sa clientèle.
              </p>
              <p>
                Son approche centrée sur le patient et sa passion pour l&apos;amélioration continue lui permettent de proposer des solutions toujours adaptées aux besoins spécifiques de chacun.
              </p>
              <p>
                Marie est reconnue pour son écoute attentive et sa capacité à mettre les patients en confiance dès leur première visite. Elle croit fermement que la relation de confiance entre l&apos;orthésiste et le patient est la clé d&apos;un résultat optimal.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                <a href="tel:450-403-4116" className="btn btn-primary btn-sm">Tél: 450 403-4116</a>
                <a href="mailto:info@ortheseconseil.com" className="btn btn-secondary btn-sm">info@ortheseconseil.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
