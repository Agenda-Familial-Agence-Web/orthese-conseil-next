import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: 'À propos de nous',
  description: 'Découvrez Orthèse Conseil, clinique d\'orthèses à Chambly fondée en 2011. Éric Drasse et Marie Lefebvre, orthésistes certifiés avec 40+ ans d\'expérience combinée.',
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="À propos de nous"
        breadcrumbs={[{ label: 'À propos de nous' }]}
      />

      <section className={`${styles.pageContent}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>Notre histoire</span>
              <h2>Orthèse Conseil, une approche humaine depuis 2011</h2>
              <p>
                Chez Orthèse Conseil, ce n&apos;est pas compliqué. Vous ne croiserez pas huit secrétaires et quinze assistantes avant de rencontrer votre orthésiste. Nous avons décidé de vous donner un service plus humain !
              </p>
              <p>
                Fondée en 2011 par Éric Drasse, notre clinique est composée de deux orthésistes d&apos;expérience. Éric et Marie vous accueillent dans un environnement chaleureux au cœur de Chambly.
              </p>
              <p>
                Nous croyons qu&apos;un bon traitement commence par une écoute attentive. C&apos;est pourquoi nous prenons le temps nécessaire avec chaque patient pour bien comprendre ses besoins et offrir des solutions personnalisées.
              </p>
            </div>
            <Image
              src="/images/team/eric-et-marie-comptoir.jpg"
              alt="Éric et Marie au comptoir"
              width={600}
              height={450}
              className={styles.contentImage}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.pageContent} section-alt`}>
        <div className="container">
          <div className="section-header">
            <h2>Notre équipe</h2>
            <p>Deux orthésistes passionnés à votre service.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/a-propos-de-nous/eric-drasse" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.profileCard}>
                <Image src="/images/team/eric-et-marie-comptoir.jpg" alt="Éric Drasse" width={200} height={260} className={styles.profileImage} />
                <div className={styles.profileInfo}>
                  <h3 className={styles.profileName}>Éric Drasse</h3>
                  <span className={styles.profileTitle}>Orthésiste</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>25+ ans d&apos;expérience</p>
                  <span className="btn btn-sm btn-primary" style={{ marginTop: 8, alignSelf: 'flex-start' }}>Voir le profil</span>
                </div>
              </div>
            </Link>
            <Link href="/a-propos-de-nous/marie-lefebvre" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.profileCard}>
                <Image src="/images/team/marie-consultation.jpg" alt="Marie Lefebvre" width={200} height={260} className={styles.profileImage} />
                <div className={styles.profileInfo}>
                  <h3 className={styles.profileName}>Marie Lefebvre</h3>
                  <span className={styles.profileTitle}>Orthésiste & Massothérapeute</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>20+ ans d&apos;expérience</p>
                  <span className="btn btn-sm btn-primary" style={{ marginTop: 8, alignSelf: 'flex-start' }}>Voir le profil</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.pageContent}>
        <div className="container">
          <div className="section-header">
            <h2>Accréditations et reconnaissances</h2>
            <p>Clinique reconnue par les organismes gouvernementaux et professionnels.</p>
          </div>
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {['AOPQ', 'OTPQ', 'CCCOP', 'RAMQ', 'SAAQ', 'CNESST', 'MSSS'].map((org) => (
              <div key={org} style={{ padding: 24, background: 'var(--off-white)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--blue-primary)', fontSize: '1.1rem' }}>
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
