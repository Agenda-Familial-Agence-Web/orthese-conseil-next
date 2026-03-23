import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

export const metadata: Metadata = {
  title: "Marie Lefebvre, Orthésiste & Massothérapeute — Orthèse Conseil",
  description:
    "Marie Lefebvre, orthésiste et massothérapeute chez Orthèse Conseil. Plus de 20 ans d’expérience en soins pédiatriques et orthèses plantaires.",
};

export default function MarieLefebvrePage() {
  return <ProfilePageClient />;
}
