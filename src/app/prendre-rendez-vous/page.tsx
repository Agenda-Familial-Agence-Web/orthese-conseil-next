import { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Orthèse Conseil",
  description:
    "Prenez rendez-vous avec nos orthésistes certifiés à Chambly. Formulaire en ligne simple et rapide pour planifier votre visite.",
};

export default function BookingPage() {
  return <BookingPageClient />;
}
