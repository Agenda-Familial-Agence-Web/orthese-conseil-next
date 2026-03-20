import { Metadata } from "next";
import VisiteCliniqueClient from "./VisiteCliniqueClient";

export const metadata: Metadata = {
  title: "Visite de la clinique — Orthèse Conseil",
  description:
    "Découvrez nos installations modernes et accueillantes à Chambly. Galerie photo de la clinique Orthèse Conseil.",
};

export default function VisiteCliniquePage() {
  return <VisiteCliniqueClient />;
}
