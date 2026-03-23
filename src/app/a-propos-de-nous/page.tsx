import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'À propos de nous' };

export default function AProposPage() {
  return (
    <>
      <HeroBanner
        title="À propos d'Orthèse Conseil"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'À propos de nous' }]}
      />

      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>Qui sommes-nous?</span>
              <h2>Une clinique à dimension humaine</h2>
              <p>
                Chez Orthèse Conseil, ce n&apos;est pas compliqué. Vous ne croiserez pas huit secrétaires et quinze assistantes avant de rencontrer votre orthésiste. Pourquoi ? Parce que chez Orthèse Conseil, nous avons décidé de vous donner un service plus humain !
              </p>
              <p>
                Orthèse Conseil fût mis sur pieds en 2011 à la suite d&apos;une introspection sur le métier d&apos;orthésiste de la part de Marie et Éric. Ces derniers désiraient revenir à une pratique plus personnalisée, où le patient est au centre de toutes les préoccupations de l&apos;entreprise.
              </p>
            </div>
            <Image
              src="/images/clinic/hero-clinic.jpg"
              alt="Clinique Orthèse Conseil"
              width={560}
              height={400}
              className={styles.contentImage}
            />
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Notre équipe</h2>
            <p>Maintenant, parlant d&apos;humains, voici nos deux orthésistes !</p>
          </div>

          <div className={styles.profileCard}>
            <Image src="/images/Éric.jpg" alt="Éric Drasse" width={200} height={260} className={styles.profileImage} />
            <div className={styles.profileInfo}>
              <h3 className={styles.profileName}>Éric Drasse</h3>
              <span className={styles.profileTitle}>Orthésiste T.P certifié — 25+ ans d&apos;expérience</span>
              <p>Passionné des gens, Éric a la chance d&apos;améliorer votre qualité de vie. Son expérience des 25 dernières années lui a permis d&apos;expérimenter diverses techniques de moulage et de fabrication pour choisir la plus adaptée à vos besoins.</p>
              <Link href="/a-propos-de-nous/eric-drasse" className="btn btn-primary btn-sm">Voir le profil</Link>
            </div>
          </div>

          <div className={styles.profileCard}>
            <Image src="/images/Marie.jpg" alt="Marie Lefebvre" width={200} height={260} className={styles.profileImage} />
            <div className={styles.profileInfo}>
              <h3 className={styles.profileName}>Marie Lefebvre</h3>
              <span className={styles.profileTitle}>Orthésiste T.P certifiée — 15+ ans d&apos;expérience</span>
              <p>Marie aime mettre à profit ses connaissances des nouvelles technologies pour offrir ce qui se fait de mieux à sa clientèle. Son approche combinée de savoir-faire et d&apos;innovation lui permet de répondre au mieux à vos besoins.</p>
              <Link href="/a-propos-de-nous/marie-lefebvre" className="btn btn-primary btn-sm">Voir le profil</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nos accréditations</h2>
          </div>
          <div className={styles.textContent} style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <p>
              Tous nos orthésistes sont membres de l&apos;AOPQ, du CCCOP et de l&apos;Ordre des technologues professionnels du Québec. Nous sommes reconnus par la RAMQ, la SAAQ, la CNESST et le MSSS ainsi que chez les assureurs privés.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
