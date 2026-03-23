'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import { services } from '@/data/services';

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', telephone: '', courriel: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.nom.trim()) errs.nom = 'Veuillez entrer votre nom';
    if (!form.telephone.trim() && !form.courriel.trim()) errs.courriel = 'Veuillez entrer un courriel ou téléphone';
    if (!form.message.trim()) errs.message = 'Veuillez entrer votre message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: 40 }}
        >
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-accent)" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
          <h3 style={{ marginBottom: 8 }}>Message envoyé!</h3>
          <p>Nous vous contacterons dans les plus brefs délais.</p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <FloatingLabel label="Nom complet" name="nom" value={form.nom} onChange={update('nom')} error={errors.nom} required />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <FloatingLabel label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={update('telephone')} />
            <FloatingLabel label="Courriel" name="courriel" type="email" value={form.courriel} onChange={update('courriel')} error={errors.courriel} />
          </div>
          <div style={{ position: 'relative' }}>
            <select
              name="service"
              value={form.service}
              onChange={(e) => update('service')(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: form.service ? 'var(--text-primary)' : 'var(--text-muted)',
                background: 'var(--white)',
                border: 'none',
                borderBottom: '2px solid var(--gray-100)',
                borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="">Choisir un service (optionnel)</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <FloatingLabel label="Votre message" name="message" value={form.message} onChange={update('message')} error={errors.message} textarea required />
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Envoyer le message
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
