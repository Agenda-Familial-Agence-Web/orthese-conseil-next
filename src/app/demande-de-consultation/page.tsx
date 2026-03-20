import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Demande de consultation' };

export default function DemandeConsultationPage() {
  return (
    <>
      <HeroBanner
        title="Demande de consultation"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Demande de consultation' }]}
      />
      <section className={styles.pageContent}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className={styles.contactCard}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2>N&apos;attendez plus et retrouvez enfin votre confort !</h2>
              <p style={{ marginTop: 12 }}>
                Venir chez Orthèse Conseil, c&apos;est l&apos;assurance d&apos;un service hors du commun et d&apos;une qualité inégalée. Utilisez le formulaire suivant pour faire une demande d&apos;une première consultation.
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
                <label className={styles.formLabel}>Adresse postale</label>
                <input type="text" className={styles.formInput} placeholder="Adresse" />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Ville</label>
                  <input type="text" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Province</label>
                  <select className={styles.formSelect}>
                    <option value="Quebec">Québec</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Other">Autre</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Code postal</label>
                <input type="text" className={styles.formInput} style={{ maxWidth: 200 }} />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Quelles sont vos disponibilités? *</label>
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}><input type="checkbox" /> Matin</label>
                  <label className={styles.checkboxLabel}><input type="checkbox" /> Après-midi</label>
                  <label className={styles.checkboxLabel}><input type="checkbox" /> Soir</label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Quel service avez-vous besoin? *</label>
                <select className={styles.formSelect} required>
                  <option value="">Choisissez s.v.p.</option>
                  <option value="ortheses-plantaires">Orthèses plantaires</option>
                  <option value="evaluation-biomecanique">Évaluation biomécanique</option>
                  <option value="appareillages">Appareillages orthopédiques</option>
                  <option value="bas-contention">Bas de contention</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Décrivez vos problèmes et besoins *</label>
                <textarea className={styles.formTextarea} required rows={5}></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Envoyer la demande de consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
