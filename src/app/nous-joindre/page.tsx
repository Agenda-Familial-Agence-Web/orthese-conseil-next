import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/data/site';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = {
  title: 'Nous joindre',
  description: 'Contactez Orthèse Conseil à Chambly. Téléphone: 450-403-4116, courriel: info@ortheseconseil.com. 2082 Boulevard Industriel, Chambly.',
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        title="Nous joindre"
        breadcrumbs={[{ label: 'Nous joindre' }]}
      />

      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* ---- Contact Info ---- */}
            <div>
              <div className={styles.contactCard} style={{ marginBottom: 24 }}>
                <h3 style={{ marginBottom: 20 }}>Clinique principale — Chambly</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{siteConfig.locations[0].address}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <div>
                      <a href="tel:450-403-4116" style={{ fontWeight: 600 }}>450 403-4116</a> (bureau)
                      <br />
                      <a href="tel:514-742-4116">514 742-4116</a> (cellulaire)
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <a href="mailto:info@ortheseconseil.com">{siteConfig.email}</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <h3 style={{ marginBottom: 16 }}>Heures d&apos;ouverture</h3>
                <table className={styles.hoursTable}>
                  <tbody>
                    {siteConfig.hours.map((h) => (
                      <tr key={h.day}>
                        <td style={{ fontWeight: 600 }}>{h.day}</td>
                        <td>{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 12 }}>
                  * Mardi et jeudi en soirée jusqu&apos;à 18h00 en alternance.
                </p>
              </div>
            </div>

            {/* ---- Contact Form ---- */}
            <div className={styles.contactCard}>
              <h3 style={{ marginBottom: 24 }}>Envoyez-nous un message</h3>
              <ContactForm />
            </div>
          </div>

          {/* ---- Map ---- */}
          <div style={{ marginTop: 48, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5!2d-73.2875!3d45.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2082+Boulevard+Industriel+Chambly+QC!5e0!3m2!1sfr!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Google Maps — Orthèse Conseil Chambly"
            />
          </div>
        </div>
      </section>
    </>
  );
}
