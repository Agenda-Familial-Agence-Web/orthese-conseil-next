"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const sections = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Approche humaine",
    text: [
      "Chez Orth\u00e8se Conseil, chaque patient est unique. Nous prenons le temps d\u2019\u00e9couter attentivement vos besoins, de comprendre votre condition et vos objectifs avant de proposer un plan de traitement.",
      "Notre \u00e9quipe croit fermement que la relation de confiance entre le patient et le professionnel est essentielle \u00e0 la r\u00e9ussite du traitement. C\u2019est pourquoi nous accordons une importance particuli\u00e8re \u00e0 la communication et \u00e0 l\u2019\u00e9ducation de nos patients.",
      "Nous vous expliquons chaque \u00e9tape du processus, r\u00e9pondons \u00e0 toutes vos questions et nous assurons que vous vous sentez \u00e0 l\u2019aise et en confiance tout au long de votre parcours de soins.",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Fabrication sur place",
    text: [
      "Toutes nos orth\u00e8ses sont con\u00e7ues et fabriqu\u00e9es directement dans notre atelier \u00e0 Chambly. Cette approche nous permet de maintenir un contr\u00f4le de qualit\u00e9 rigoureux \u00e0 chaque \u00e9tape de la production.",
      "La fabrication sur place offre un avantage consid\u00e9rable : des d\u00e9lais de livraison r\u00e9duits et la possibilit\u00e9 d\u2019effectuer des ajustements rapides si n\u00e9cessaire. Vous n\u2019avez pas \u00e0 attendre des semaines pour recevoir vos orth\u00e8ses.",
      "Notre atelier est \u00e9quip\u00e9 des derni\u00e8res technologies de fabrication, nous permettant de cr\u00e9er des orth\u00e8ses pr\u00e9cises et durables, parfaitement adapt\u00e9es \u00e0 votre anatomie et \u00e0 vos besoins.",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Suivi personnalis\u00e9",
    text: [
      "Notre engagement ne s\u2019arr\u00eate pas \u00e0 la livraison de vos orth\u00e8ses. Nous assurons un suivi complet pour garantir votre confort et l\u2019efficacit\u00e9 optimale de votre traitement.",
      "Des rendez-vous de suivi r\u00e9guliers vous sont propos\u00e9s pour v\u00e9rifier l\u2019ajustement de vos orth\u00e8ses, \u00e9valuer votre progression et apporter les modifications n\u00e9cessaires \u00e0 votre \u00e9volution.",
      "Si vous ressentez le moindre inconfort ou avez des questions entre vos rendez-vous, notre \u00e9quipe est toujours disponible pour vous aider. Votre satisfaction et votre bien-\u00eatre sont notre priorit\u00e9 absolue.",
    ],
  },
];

export default function NotreApprocheClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-32 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-light mb-4">
              Philosophie
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">
              Notre approche
            </h1>
            <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto">
              Une philosophie de soins centr\u00e9e sur le patient, la qualit\u00e9 et l&apos;accompagnement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-warm-gray"}`}
        >
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
                  {section.title}
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {section.text.map((paragraph, pIndex) => (
                <ScrollReveal key={pIndex} delay={pIndex * 0.1}>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
