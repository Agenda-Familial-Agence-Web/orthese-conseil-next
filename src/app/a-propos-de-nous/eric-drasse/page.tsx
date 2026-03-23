import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Profil d\'Éric Drasse, Orthésiste T.P certifié' };

export default function EricDrassePage() {
  return (
    <>
      <HeroBanner
        title="Profil d'Éric Drasse"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Éric Drasse' },
        ]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <Image
              src="/images/Éric.jpg"
              alt="Éric Drasse, Orthésiste"
              width={480}
              height={600}
              className={styles.contentImage}
            />
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>Orthésiste T.P certifié</span>
              <h2>Éric Drasse</h2>
              <blockquote style={{ borderLeft: '3px solid var(--blue-primary)', paddingLeft: 20, fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                &ldquo;Vous aider a toujours été un privilège pour moi.&rdquo;
              </blockquote>
              <p>
                Mon expérience des 25 dernières années m&apos;a permis d&apos;expérimenter diverses techniques de moulage et de fabrication, ce qui me permettra de choisir la plus adaptée à vos besoins. Passionné des gens, j&apos;ai la chance d&apos;améliorer votre qualité de vie. C&apos;est avec cette passion renouvelée que j&apos;utilise mes forces et habilités chez Orthèse Conseil.
              </p>
              <p>
                Notre entreprise offre un environnement humain dédié à l&apos;écoute de vos problèmes et des douleurs occasionnées par l&apos;instabilité de votre biomécanique. Il est important pour moi de privilégier la qualité à la quantité.
              </p>
              <p>
                Je suis heureux de vous offrir un service personnalisé où je me soucie de votre bien-être de l&apos;évaluation à la fabrication jusqu&apos;à la livraison. Étant moi-même un adepte du plein air, je connais l&apos;importance du confort dont vous avez besoin.
              </p>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Il me fera plaisir de contribuer à votre mieux-être…<br />– Éric
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
