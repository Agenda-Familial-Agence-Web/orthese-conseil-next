'use client';

import { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import styles from '@/styles/inner.module.css';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroBanner
        title="Demande de consultation"
        breadcrumbs={[{ label: 'Demande de consultation' }]}
      />

      <section className={styles.pageContent}>
        <div className="container" style={{ maxWidth: 750 }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: 60 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-accent)" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h2>Demande envoyée!</h2>
              <p style={{ marginTop: 12 }}>Nous vous contacterons dans les plus brefs délais pour planifier votre consultation.</p>
            </div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h2>Formulaire de consultation</h2>
                <p style={{ marginTop: 12 }}>Remplissez ce formulaire et nous vous contacterons pour planifier votre rendez-vous.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20, background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: 40, boxShadow: 'var(--shadow-lg)' }}>
                <div className={styles.formRow}>
                  <div>
                    <label className={styles.formLabel}>Prénom *</label>
                    <input className={styles.formInput} type="text" required />
                  </div>
                  <div>
                    <label className={styles.formLabel}>Nom *</label>
                    <input className={styles.formInput} type="text" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div>
                    <label className={styles.formLabel}>Téléphone *</label>
                    <input className={styles.formInput} type="tel" required />
                  </div>
                  <div>
                    <label className={styles.formLabel}>Courriel</label>
                    <input className={styles.formInput} type="email" />
                  </div>
                </div>

                <div>
                  <label className={styles.formLabel}>Adresse</label>
                  <input className={styles.formInput} type="text" />
                </div>

                <div className={styles.formRow}>
                  <div>
                    <label className={styles.formLabel}>Ville</label>
                    <input className={styles.formInput} type="text" />
                  </div>
                  <div>
                    <label className={styles.formLabel}>Province</label>
                    <select className={styles.formSelect}>
                      <option value="QC">Québec</option>
                      <option value="ON">Ontario</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={styles.formLabel}>Code postal</label>
                  <input className={styles.formInput} type="text" style={{ maxWidth: 200 }} />
                </div>

                <div>
                  <label className={styles.formLabel}>Disponibilité</label>
                  <div className={styles.checkboxGroup}>
                    {['Matin', 'Après-midi', 'Soirée'].map((time) => (
                      <label key={time} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                        <input type="checkbox" value={time} style={{ width: 18, height: 18, accentColor: 'var(--blue-primary)' }} />
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={styles.formLabel}>Service souhaité</label>
                  <select className={styles.formSelect}>
                    <option value="">Choisir un service</option>
                    <option>Orthèses plantaires</option>
                    <option>Évaluation biomécanique</option>
                    <option>Appareillages</option>
                    <option>Bas de contention</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className={styles.formLabel}>Description du problème</label>
                  <textarea className={styles.formTextarea} rows={5} />
                </div>

                <button type="submit" className="btn btn-green" style={{ alignSelf: 'flex-start' }}>
                  Envoyer la demande
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
