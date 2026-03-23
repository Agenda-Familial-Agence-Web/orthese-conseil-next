import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
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

            <form>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Prénom *</label>
                  <input type="text" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Nom *</label>
                  <input type="text" className={styles.formInput} required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Téléphone *</label>
                  <input type="tel" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Courriel *</label>
                  <input type="email" className={styles.formInput} required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Êtes-vous un client existant?</label>
                <select className={styles.formSelect}>
                  <option value="">Choisissez...</option>
                  <option value="oui">Oui, je suis un client existant</option>
                  <option value="non">Non, c&apos;est ma première visite</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service désiré *</label>
                <select className={styles.formSelect} required>
                  <option value="">Choisissez s.v.p.</option>
                  <option value="ortheses-plantaires">Orthèses plantaires</option>
                  <option value="evaluation-biomecanique">Évaluation biomécanique</option>
                  <option value="orthese-genou">Orthèse de genou</option>
                  <option value="services-pediatriques">Services pédiatriques</option>
                  <option value="attelle-poignet">Attelle de poignet</option>
                  <option value="bas-contention">Bas de contention</option>
                  <option value="chaussures">Chaussures sur mesure</option>
                  <option value="tens">TENS et électrodes</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Quelles sont vos disponibilités?</label>
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}><input type="checkbox" /> Matin</label>
                  <label className={styles.checkboxLabel}><input type="checkbox" /> Après-midi</label>
                  <label className={styles.checkboxLabel}><input type="checkbox" /> Soir</label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Notes additionnelles</label>
                <textarea className={styles.formTextarea} rows={4}></textarea>
              </div>

              <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%' }}>
                Demander un rendez-vous
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
