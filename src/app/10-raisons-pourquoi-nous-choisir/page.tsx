import type { Metadata } from "next";
import ReasonsPageClient from "./ReasonsPageClient";

export const metadata: Metadata = {
  title: "10 raisons de nous choisir — Orthèse Conseil",
  description:
    "Découvrez les 10 raisons de choisir Orthèse Conseil pour vos orthèses sur mesure.",
};

export default function ReasonsPage() {
  return <ReasonsPageClient />;
}
