import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: 'Notre approche',
  description: 'Découvrez l\'approche humaine et personnalisée d\'Orthèse Conseil. Écoute, fabrication sur place et suivi attentionné.',
};

export default function NotreApprochePage() {
  return (
    <>
      <HeroBanner
        title="Notre approche"
        breadcrumbs={[
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Notre approche' },
        ]}
      />

      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.textContent} style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className={styles.sectionLabel}>Notre philosophie</span>
            <h2>Une approche centrée sur vous</h2>
            <p>
              Chez Orthèse Conseil, notre approche repose sur trois piliers fondamentaux : l&apos;écoute, l&apos;expertise et le suivi. Nous croyons que chaque patient est unique et mérite une attention personnalisée.
            </p>

            <h3 style={{ marginTop: 32 }}>Approche humaine</h3>
            <p>
              Nous prenons le temps d&apos;écouter vos préoccupations et de comprendre votre condition. Pas de numéro de dossier — vous êtes une personne avec des besoins spécifiques. Notre objectif est de vous offrir un environnement chaleureux où vous vous sentez en confiance.
            </p>

            <h3 style={{ marginTop: 32 }}>Fabrication sur place</h3>
            <p>
              Contrairement à plusieurs cliniques qui sous-traitent la fabrication, nous fabriquons vos orthèses directement dans notre atelier à Chambly. Cela nous permet un contrôle qualité rigoureux, des délais plus courts et la possibilité d&apos;effectuer des ajustements sur place rapidement.
            </p>

            <h3 style={{ marginTop: 32 }}>Suivi personnalisé</h3>
            <p>
              Votre traitement ne s&apos;arrête pas à la livraison de votre orthèse. Nous assurons un suivi attentif avec des rendez-vous de contrôle et des ajustements gratuits. Vous êtes toujours suivi par le même orthésiste, pour une continuité de soins optimale.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
