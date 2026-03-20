import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

export const metadata: Metadata = {
  title: "Marie Lefebvre, Orth\u00e9siste & Massoth\u00e9rapeute — Orth\u00e8se Conseil",
  description:
    "Marie Lefebvre, orth\u00e9siste et massoth\u00e9rapeute chez Orth\u00e8se Conseil. Plus de 20 ans d\u2019exp\u00e9rience en soins p\u00e9diatriques et orth\u00e8ses plantaires.",
};

export default function MarieLefebvrePage() {
  return <ProfilePageClient />;
}
