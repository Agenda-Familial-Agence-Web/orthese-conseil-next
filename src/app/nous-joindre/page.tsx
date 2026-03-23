import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Nous joindre — Orthèse Conseil",
  description:
    "Contactez Orthèse Conseil à Chambly. Téléphone, courriel, adresse et heures d'ouverture. Prenez rendez-vous avec nos orthésistes certifiés.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
