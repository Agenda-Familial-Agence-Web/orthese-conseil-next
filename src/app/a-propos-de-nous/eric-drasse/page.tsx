import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

export const metadata: Metadata = {
  title: "Éric Drasse, Orthésiste — Orthèse Conseil",
  description:
    "Éric Drasse, orthésiste fondé Orthèse Conseil en 2011. Plus de 25 ans d’expérience en orthèses plantaires, orthèses de genou et évaluation biomécanique.",
};

export default function EricDrassePage() {
  return <ProfilePageClient />;
}
