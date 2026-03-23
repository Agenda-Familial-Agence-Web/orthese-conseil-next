import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import ContactForm from '@/components/ui/ContactForm';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Nous joindre' };

export default function NousJoindrePage() {
  return (
    <>
      <HeroBanner
        title="Nous joindre"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Nous joindre' }]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Info + Hours */}
            <div>
              <div className={styles.contactCard} style={{ marginBottom: 32 }}>
                <h2 style={{ marginBottom: 24 }}>Orthèse Conseil</h2>
                <h3 style={{ fontSize: '1rem', color: 'var(--blue-primary)', marginBottom: 16 }}>Clinique principale</h3>
                <p style={{ marginBottom: 8 }}>2082 Boulevard Industriel<br />Chambly, QC J3L 4V2</p>
                <p style={{ marginBottom: 8 }}>Tél: <a href="tel:450-403-4116" style={{ fontWeight: 600 }}>450 403-4116</a></p>
                <p style={{ marginBottom: 8 }}>Cel: <a href="tel:514-742-4116" style={{ fontWeight: 600 }}>514 742-4116</a></p>
                <p>Courriel: <a href="mailto:info@ortheseconseil.com" style={{ fontWeight: 600 }}>info@ortheseconseil.com</a></p>

                <div style={{ marginTop: 32, padding: '20px 0', borderTop: '1px solid var(--gray-100)' }}>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 8 }}>Clinique externe</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Clinique de Physiothérapie Physio Passion (sur demande seulement)<br />1070, Route 112<br />Saint-Césaire, QC J0L 1T0</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <h2 style={{ marginBottom: 20 }}>Heures d&apos;ouverture</h2>
                <table className={styles.hoursTable}>
                  <tbody>
                    <tr><td>Lundi</td><td>9h00 à 14h30</td></tr>
                    <tr><td>Mardi</td><td>9h00 à 14h30 (ou 18h00*)</td></tr>
                    <tr><td>Mercredi</td><td>9h00 à 20h00</td></tr>
                    <tr><td>Jeudi</td><td>9h00 à 14h30 (ou 18h00*)</td></tr>
                    <tr><td>Vendredi</td><td>9h00 à 17h00</td></tr>
                    <tr><td>Samedi</td><td>9h00 à 12h00</td></tr>
                    <tr><td>Dimanche</td><td>Fermé</td></tr>
                  </tbody>
                </table>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 12 }}>
                  *Les mardis et jeudis soirs, nous sommes ouverts jusqu&apos;à 18h00 en alternance 1 semaine sur 2. Contactez-nous pour confirmer.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={styles.contactCard}>
              <h2 style={{ marginBottom: 24 }}>Formulaire de contact</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map embed */}
          <div style={{ marginTop: 48, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.6!2d-73.291!3d45.442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc912345678!2s2082+Boul+Industriel%2C+Chambly%2C+QC+J3L+4V2!5e0!3m2!1sfr!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Orthèse Conseil - Chambly"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
