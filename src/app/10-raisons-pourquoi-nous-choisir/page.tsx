import type { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import { reasons } from '@/data/reasons';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: '10 raisons pourquoi nous choisir',
  description: 'Découvrez 10 bonnes raisons de choisir Orthèse Conseil pour vos besoins orthopédiques à Chambly.',
};

export default function ReasonsPage() {
  return (
    <>
      <HeroBanner
        title="10 raisons pourquoi nous choisir"
        breadcrumbs={[{ label: '10 raisons' }]}
      />

      <section className={styles.pageContent}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className={styles.reasonsList}>
            {reasons.map((reason) => (
              <div key={reason.number} className={styles.reasonItem}>
                <span className={styles.reasonNumber}>
                  {String(reason.number).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <h2 style={{ marginBottom: 16 }}>Convaincu?</h2>
            <p style={{ marginBottom: 24 }}>Prenez rendez-vous dès maintenant avec notre équipe.</p>
            <Link href="/prendre-rendez-vous" className="btn btn-green btn-lg">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
