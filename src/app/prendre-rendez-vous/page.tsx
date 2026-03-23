import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import BookingForm from '@/components/ui/BookingForm';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Prendre rendez-vous' };

export default function PrendreRendezVousPage() {
  return (
    <>
      <HeroBanner
        title="Prendre rendez-vous"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Prendre rendez-vous' }]}
      />
      <section className={styles.pageContent}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className={styles.contactCard}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2>Planifiez votre rendez-vous</h2>
              <p style={{ marginTop: 12 }}>
                Vous pouvez nous appeler directement au <a href="tel:450-403-4116" style={{ fontWeight: 700, color: 'var(--blue-primary)' }}>450 403-4116</a> ou utiliser le formulaire ci-dessous.
              </p>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
