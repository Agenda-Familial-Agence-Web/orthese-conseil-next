"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingLabel from "./FloatingLabel";
import { services } from "@/data/services";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

interface PersonalInfo {
  nom: string;
  prenom: string;
  telephone: string;
  courriel: string;
}

interface PersonalErrors {
  nom?: string;
  prenom?: string;
  telephone?: string;
  courriel?: string;
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [personal, setPersonal] = useState<PersonalInfo>({
    nom: "",
    prenom: "",
    telephone: "",
    courriel: "",
  });
  const [personalErrors, setPersonalErrors] = useState<PersonalErrors>({});
  const [shakeFields, setShakeFields] = useState<string[]>([]);

  const [selectedService, setSelectedService] = useState<string>("");
  const [notes, setNotes] = useState("");

  const validateStep1 = (): boolean => {
    const errs: PersonalErrors = {};
    if (!personal.nom.trim()) errs.nom = "Le nom est requis";
    if (!personal.prenom.trim()) errs.prenom = "Le prénom est requis";
    if (!personal.telephone.trim()) errs.telephone = "Le téléphone est requis";
    if (!personal.courriel.trim()) {
      errs.courriel = "Le courriel est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personal.courriel)) {
      errs.courriel = "Courriel invalide";
    }
    setPersonalErrors(errs);
    if (Object.keys(errs).length > 0) {
      setShakeFields(Object.keys(errs));
      setTimeout(() => setShakeFields([]), 500);
      return false;
    }
    return true;
  };

  const next = () => {
    if (step === 0 && !validateStep1()) return;
    if (step === 1 && !selectedService) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, 2));
  };

  const prev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const updatePersonal = (field: keyof PersonalInfo, value: string) => {
    setPersonal((prev) => ({ ...prev, [field]: value }));
    if (personalErrors[field]) {
      setPersonalErrors((prev) => ({ ...prev, [field]: undefined }));
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
          Demande envoyée!
        </motion.h3>
        <motion.p
          className="text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Nous vous contacterons sous peu pour confirmer votre rendez-vous.
        </motion.p>
      </motion.div>
    );
  }

  const selectedServiceData = services.find((s) => s.slug === selectedService);

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {["Vos informations", "Choix du service", "Confirmation"].map(
          (label, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-heading font-bold transition-colors duration-300 ${
                    i <= step
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-text-muted"
                  }`}
                  animate={{ scale: i === step ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {i < step ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </motion.div>
                <span
                  className={`text-xs mt-1 hidden sm:block ${
                    i <= step ? "text-primary font-semibold" : "text-text-muted"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className={`w-12 h-0.5 transition-colors duration-300 ${
                    i < step ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          )
        )}
      </div>

      {/* Steps content */}
      <div className="relative overflow-hidden min-h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6">
                Vos informations
              </h3>
              {(["prenom", "nom", "telephone", "courriel"] as const).map(
                (field) => {
                  const labels: Record<string, string> = {
                    prenom: "Prénom",
                    nom: "Nom",
                    telephone: "Téléphone",
                    courriel: "Courriel",
                  };
                  const types: Record<string, string> = {
                    prenom: "text",
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
                        value={personal[field]}
                        onChange={(val) => updatePersonal(field, val)}
                        error={personalErrors[field]}
                      />
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6">
                Choix du service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <motion.button
                    key={s.slug}
                    type="button"
                    onClick={() => setSelectedService(s.slug)}
                    className={`relative p-4 rounded-xl border-2 text-left transition-colors duration-200 ${
                      selectedService === s.slug
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          selectedService === s.slug
                            ? "border-primary"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedService === s.slug && (
                          <motion.div
                            className="w-3 h-3 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                      </div>
                      <span
                        className={`font-heading font-semibold text-sm ${
                          selectedService === s.slug
                            ? "text-primary"
                            : "text-text-primary"
                        }`}
                      >
                        {s.name}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
              {!selectedService && (
                <p className="text-sm text-text-muted mt-4">
                  Veuillez sélectionner un service pour continuer.
                </p>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6">
                Confirmation
              </h3>

              <div className="bg-warm-gray rounded-xl p-6 mb-8 space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-muted">Nom</span>
                  <span className="font-semibold text-text-primary">
                    {personal.prenom} {personal.nom}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Téléphone</span>
                  <span className="font-semibold text-text-primary">
                    {personal.telephone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Courriel</span>
                  <span className="font-semibold text-text-primary">
                    {personal.courriel}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Service</span>
                  <span className="font-semibold text-primary">
                    {selectedServiceData?.name}
                  </span>
                </div>
              </div>

              <FloatingLabel
                label="Notes additionnelles"
                name="notes"
                textarea
                value={notes}
                onChange={setNotes}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {step > 0 ? (
          <button
            type="button"
            onClick={prev}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-text-secondary font-heading font-semibold hover:border-gray-300 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Précédent
          </button>
        ) : (
          <div />
        )}

        {step < 2 ? (
          <button
            type="button"
            onClick={next}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold transition-colors duration-200 ${
              step === 1 && !selectedService
                ? "bg-gray-200 text-text-muted cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
            disabled={step === 1 && !selectedService}
          >
            Suivant
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-heading font-semibold hover:bg-accent-dark transition-colors duration-200"
          >
            Confirmer le rendez-vous
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
