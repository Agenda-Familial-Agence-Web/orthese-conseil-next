import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: 'Marie Lefebvre — Orthésiste & Massothérapeute',
  description: 'Marie Lefebvre, orthésiste et massothérapeute avec plus de 20 ans d\'expérience. Spécialisée en soins pédiatriques.',
};

export default function MarieLefebvrePage() {
  return (
    <>
      <HeroBanner
        title="Marie Lefebvre"
        breadcrumbs={[
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Marie Lefebvre' },
        ]}
      />

      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>Orthésiste & Massothérapeute</span>
              <h2>Marie Lefebvre</h2>
              <p>
                Marie Lefebvre cumule plus de 20 ans d&apos;expérience comme orthésiste et massothérapeute. Sa double expertise lui permet d&apos;offrir une approche globale du traitement, combinant l&apos;orthopédie et la thérapie manuelle.
              </p>
              <p>
                Elle se spécialise notamment dans les soins pédiatriques et l&apos;accompagnement des patients dans leur réhabilitation. Son approche douce et rassurante met à l&apos;aise les patients de tous âges, en particulier les enfants.
              </p>
              <p>
                Membre de l&apos;OTPQ et de l&apos;AOPQ, Marie est reconnue pour son écoute attentive et sa capacité à adapter les traitements aux besoins spécifiques de chaque patient.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a href="tel:450-403-4116" className="btn btn-primary btn-sm">Appeler</a>
                <a href="mailto:info@ortheseconseil.com" className="btn btn-secondary btn-sm">Courriel</a>
              </div>
            </div>
            <Image
              src="/images/team/marie-consultation.jpg"
              alt="Marie Lefebvre"
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
