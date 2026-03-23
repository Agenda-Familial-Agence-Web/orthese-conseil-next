"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Accordion from "@/components/ui/Accordion";
import { faq } from "@/data/faq";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="section-padding bg-white">
      <SectionHeading
        badge="FAQ"
        title="Questions fréquentes"
        align="center"
      />

      <div className="max-w-3xl mx-auto mt-12">
        <ScrollReveal>
          <Accordion items={faq} />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center mt-12 text-text-secondary">
            Vous avez d&apos;autres questions?{" "}
            <Link
              href="/nous-joindre"
              className="text-primary font-medium hover:underline"
            >
              Contactez-nous
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
