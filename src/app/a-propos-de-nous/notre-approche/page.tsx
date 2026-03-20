import { Metadata } from "next";
import NotreApprocheClient from "./NotreApprocheClient";

export const metadata: Metadata = {
  title: "Notre approche — Orthèse Conseil",
  description:
    "Découvrez l’approche personnalisée d’Orthèse Conseil : approche humaine, fabrication sur place et suivi personnalisé pour vos orthèses sur mesure.",
};

export default function NotreApprochePage() {
  return <NotreApprocheClient />;
}
