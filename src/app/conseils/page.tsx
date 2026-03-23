import type { Metadata } from "next";
import ConseilsPageClient from "./ConseilsPageClient";

export const metadata: Metadata = {
  title: "Conseils — Orthèse Conseil",
  description: "Conseils et articles sur la santé orthopédique.",
};

export default function ConseilsPage() {
  return <ConseilsPageClient />;
}
