"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingLabel from "./FloatingLabel";
import MagneticButton from "./MagneticButton";
import { services } from "@/data/services";

interface FormData {
  nom: string;
  telephone: string;
  courriel: string;
  service: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  telephone?: string;
  courriel?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    telephone: "",
    courriel: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [shakeFields, setShakeFields] = useState<string[]>([]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.telephone.trim())
      newErrors.telephone = "Le téléphone est requis";
    if (!formData.courriel.trim()) {
      newErrors.courriel = "Le courriel est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.courriel)) {
      newErrors.courriel = "Courriel invalide";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShakeFields(Object.keys(newErrors));
      setTimeout(() => setShakeFields([]), 500);
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
        <motion.h3
          className="text-2xl font-heading font-bold text-text-primary mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Message envoyé!
        </motion.h3>
        <motion.p
          className="text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Nous vous répondrons dans les plus brefs délais.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {(["nom", "telephone", "courriel"] as const).map((field) => {
        const labels: Record<string, string> = {
          nom: "Nom complet",
          telephone: "Téléphone",
          courriel: "Courriel",
        };
        const types: Record<string, string> = {
          nom: "text",
          telephone: "tel",
          courriel: "email",
        };

        return (
          <motion.div
            key={field}
            animate={
              shakeFields.includes(field)
                ? { x: [0, -10, 10, -10, 0] }
                : { x: 0 }
            }
            transition={{ duration: 0.4 }}
          >
            <FloatingLabel
              label={labels[field]}
              name={field}
              type={types[field]}
              required
              value={formData[field]}
              onChange={(val) => updateField(field, val)}
              error={errors[field as keyof FormErrors]}
            />
          </motion.div>
        );
      })}

      {/* Service select */}
      <div className="relative">
        <label
          htmlFor="service"
          className="block text-sm text-text-muted mb-2"
        >
          Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={(e) => updateField("service", e.target.value)}
          className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-text-primary outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
        >
          <option value="">Sélectionner un service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-0 bottom-3 w-5 h-5 text-text-muted pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Message textarea */}
      <FloatingLabel
        label="Message"
        name="message"
        textarea
        value={formData.message}
        onChange={(val) => updateField("message", val)}
      />

      {/* Submit */}
      <MagneticButton
        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
        onClick={() => {}}
      >
        <button
          type="submit"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Envoyer le message
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </MagneticButton>
    </form>
  );
}
