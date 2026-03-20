import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

export const metadata: Metadata = {
  title: "\u00c9ric Drasse, Orth\u00e9siste — Orth\u00e8se Conseil",
  description:
    "\u00c9ric Drasse, orth\u00e9siste fond\u00e9 Orth\u00e8se Conseil en 2011. Plus de 25 ans d\u2019exp\u00e9rience en orth\u00e8ses plantaires, orth\u00e8ses de genou et \u00e9valuation biom\u00e9canique.",
};

export default function EricDrassePage() {
  return <ProfilePageClient />;
}
