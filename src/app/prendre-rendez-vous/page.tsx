import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import BookingForm from '@/components/ui/BookingForm';

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description: 'Prenez rendez-vous avec Orthèse Conseil à Chambly. Appelez au 450-403-4116 ou remplissez notre formulaire en ligne.',
};

export default function BookingPage() {
  return (
    <>
      <HeroBanner
        title="Prendre rendez-vous"
        breadcrumbs={[{ label: 'Prendre rendez-vous' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2>Planifiez votre visite</h2>
            <p style={{ marginTop: 12 }}>
              Remplissez le formulaire ci-dessous ou appelez-nous directement au{' '}
              <a href="tel:450-403-4116" style={{ fontWeight: 600 }}>450 403-4116</a>.
            </p>
          </div>

          <div style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            padding: 40,
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--gray-100)',
          }}>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
