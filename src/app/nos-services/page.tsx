import { Metadata } from "next";
import { services } from "@/data/services";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Nos services — Orthèse Conseil",
  description:
    "Découvrez nos services d'orthèses sur mesure : orthèses plantaires, de genou, attelles, soins pédiatriques, bas de contention et plus. Orthèse Conseil à Chambly.",
};

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
