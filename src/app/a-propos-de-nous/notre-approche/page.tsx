import { Metadata } from "next";
import NotreApprocheClient from "./NotreApprocheClient";

export const metadata: Metadata = {
  title: "Notre approche — Orth\u00e8se Conseil",
  description:
    "D\u00e9couvrez l\u2019approche personnalis\u00e9e d\u2019Orth\u00e8se Conseil : approche humaine, fabrication sur place et suivi personnalis\u00e9 pour vos orth\u00e8ses sur mesure.",
};

export default function NotreApprochePage() {
  return <NotreApprocheClient />;
}
