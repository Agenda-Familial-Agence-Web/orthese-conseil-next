import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "À propos — Orthèse Conseil",
  description:
    "Découvrez l'équipe d'Orthèse Conseil, notre histoire depuis 2011 et notre approche personnalisée en orthèses sur mesure à Chambly.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
