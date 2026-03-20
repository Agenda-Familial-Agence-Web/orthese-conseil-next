import { Metadata } from "next";
import VisiteCliniqueClient from "./VisiteCliniqueClient";

export const metadata: Metadata = {
  title: "Visite de la clinique — Orth\u00e8se Conseil",
  description:
    "D\u00e9couvrez nos installations modernes et accueillantes \u00e0 Chambly. Galerie photo de la clinique Orth\u00e8se Conseil.",
};

export default function VisiteCliniquePage() {
  return <VisiteCliniqueClient />;
}
