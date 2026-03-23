import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Notre approche' };

export default function NotreApprochePage() {
  return (
    <>
      <HeroBanner
        title="Notre approche"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/a-propos-de-nous' },
          { label: 'Notre approche' },
        ]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.textContent} style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>Une approche personnalisée et humaine</h2>
            <p>
              Chez Orthèse Conseil, nous croyons que chaque patient est unique. C&apos;est pourquoi nous prenons le temps de bien comprendre vos besoins, vos douleurs et votre mode de vie avant de proposer quelque solution que ce soit.
            </p>
            <p>
              Notre approche commence toujours par une évaluation biomécanique complète. Cette première étape est cruciale pour identifier les sources de vos inconforts et déterminer le meilleur plan de traitement.
            </p>
            <p>
              Le suivi de chaque patient est toujours effectué par le même orthésiste assigné. Ce suivi est attentionné et à l&apos;écoute de vos besoins. Chez Orthèse Conseil, vous n&apos;êtes pas un numéro et nous prendrons toujours tout le temps nécessaire pour vous offrir un service de qualité supérieur.
            </p>
            <p>
              Nous fabriquons toutes nos orthèses sur place, à la clinique. Vous avez l&apos;assurance d&apos;un produit de qualité, respectant de façon exacte l&apos;évaluation des besoins effectuée par l&apos;orthésiste.
            </p>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
