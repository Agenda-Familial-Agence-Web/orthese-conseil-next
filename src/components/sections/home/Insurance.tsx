"use client";

import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import ScrollReveal from "@/components/ui/ScrollReveal";

const insuranceItems = [
  "RAMQ",
  "SAAQ",
  "CNESST",
  "MSSS",
  "AOPQ",
  "OTPQ",
  "CCCOP",
  "Assurances privées",
];

export default function Insurance() {
  return (
    <section className="bg-dark py-12">
      <ScrollReveal>
        <p className="text-white/80 text-center text-sm uppercase tracking-wider mb-8 px-6">
          Reconnu par les organismes gouvernementaux et couvert par les assurances privées
        </p>
      </ScrollReveal>

      <InfiniteMarquee speed={25} direction="left">
        {insuranceItems.map((item) => (
          <span
            key={item}
            className="inline-block bg-white/10 rounded-lg px-6 py-3 text-white/50 font-heading font-semibold text-lg hover:text-white hover:bg-white/20 transition-colors duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </InfiniteMarquee>
    </section>
  );
}
