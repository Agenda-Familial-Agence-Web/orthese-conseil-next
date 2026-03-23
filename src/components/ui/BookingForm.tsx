'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import { services } from '@/data/services';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ nom: '', prenom: '', telephone: '', courriel: '', service: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!form.prenom.trim()) errs.prenom = 'Requis';
    if (!form.nom.trim()) errs.nom = 'Requis';
    if (!form.telephone.trim()) errs.telephone = 'Requis';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !form.service) return;
    setStep((s) => s + 1);
  };

  const handleSubmit = () => setSubmitted(true);

  const stepIndicator = (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 32 }}>
      {[1, 2, 3].map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: step >= s ? 'var(--blue-primary)' : 'var(--gray-100)',
            color: step >= s ? 'white' : 'var(--text-muted)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem',
            transition: 'all var(--transition-base)',
          }}>
            {s}
          </div>
          {s < 3 && <div style={{ width: 40, height: 2, background: step > s ? 'var(--blue-primary)' : 'var(--gray-100)', transition: 'background var(--transition-base)' }} />}
        </div>
      ))}
    </div>
  );

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-accent)" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3 style={{ marginBottom: 8 }}>Demande envoyée!</h3>
        <p>Nous vous contacterons pour confirmer votre rendez-vous.</p>
      </motion.div>
    );
  }

  return (
    <div>
      {stepIndicator}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3>Vos informations</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <FloatingLabel label="Prénom" name="prenom" value={form.prenom} onChange={update('prenom')} error={errors.prenom} required />
              <FloatingLabel label="Nom" name="nom" value={form.nom} onChange={update('nom')} error={errors.nom} required />
            </div>
            <FloatingLabel label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={update('telephone')} error={errors.telephone} required />
            <FloatingLabel label="Courriel (optionnel)" name="courriel" type="email" value={form.courriel} onChange={update('courriel')} />
            <button type="button" className="btn btn-primary" onClick={next} style={{ alignSelf: 'flex-end' }}>Suivant</button>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Choisir un service</h3>
            {services.map((s) => (
              <label
                key={s.slug}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px',
                  background: form.service === s.name ? 'var(--blue-light)' : 'var(--white)',
                  border: `2px solid ${form.service === s.name ? 'var(--blue-primary)' : 'var(--gray-100)'}`,
                  borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all var(--transition-fast)',
                }}
              >
                <input type="radio" name="service" value={s.name} checked={form.service === s.name} onChange={() => update('service')(s.name)} style={{ display: 'none' }} />
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  border: `2px solid ${form.service === s.name ? 'var(--blue-primary)' : 'var(--gray-200)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {form.service === s.name && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--blue-primary)' }} />}
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{s.name}</span>
              </label>
            ))}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between', marginTop: 8 }}>
              <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>Retour</button>
              <button type="button" className="btn btn-primary" onClick={next} style={{ opacity: form.service ? 1 : 0.5 }}>Suivant</button>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3>Confirmation</h3>
            <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-md)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div><strong>Nom:</strong> {form.prenom} {form.nom}</div>
              <div><strong>Téléphone:</strong> {form.telephone}</div>
              {form.courriel && <div><strong>Courriel:</strong> {form.courriel}</div>}
              <div><strong>Service:</strong> {form.service}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>Retour</button>
              <button type="button" className="btn btn-green" onClick={handleSubmit}>Confirmer la demande</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
