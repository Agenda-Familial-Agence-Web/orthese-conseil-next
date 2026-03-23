"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Article {
  title: string;
  date: string;
  excerpt: string;
  gradient: string;
}

const articles: Article[] = [
  {
    title: "Le développement de la marche chez l'enfant",
    date: "15 janvier 2026",
    excerpt:
      "Les premiers pas de votre enfant sont une étape importante. Découvrez les différentes phases du développement de la marche et les signes à surveiller pour assurer un développement optimal des pieds et de la posture.",
    gradient: "from-primary to-primary-light",
  },
  {
    title: "Nous avons à cœur la santé de nos aînés",
    date: "8 décembre 2025",
    excerpt:
      "Avec l'âge, les pieds nécessitent une attention particulière. Apprenez comment les orthèses plantaires peuvent améliorer le confort, l'équilibre et la mobilité de nos aînés au quotidien.",
    gradient: "from-accent to-accent-light",
  },
  {
    title: "Conseils pour le choix de chaussures adaptées",
    date: "22 novembre 2025",
    excerpt:
      "Le choix de chaussures est essentiel pour la santé de vos pieds. Nos orthésistes partagent leurs recommandations pour bien choisir vos chaussures selon votre condition et votre mode de vie.",
    gradient: "from-primary-dark to-accent-dark",
  },
];

export default function ConseilsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[30vh] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <TextReveal
            variant="word"
            tag="h1"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Conseils
          </TextReveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/50" />
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => {
              const isFeatured = i === 0;

              return (
                <ScrollReveal
                  key={article.title}
                  direction="up"
                  delay={i * 0.1}
                  className={isFeatured ? "md:col-span-2" : ""}
                >
                  <a
                    href="#"
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Placeholder image */}
                    <div
                      className={`relative overflow-hidden ${
                        isFeatured ? "h-64 md:h-80" : "h-48"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${article.gradient} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heading text-white/20 text-6xl md:text-8xl font-bold select-none pointer-events-none">
                          OC
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-text-muted text-sm font-body">
                        {article.date}
                      </span>
                      <h2
                        className={`font-heading font-semibold text-text-primary mt-2 mb-3 group-hover:text-primary transition-colors ${
                          isFeatured
                            ? "text-2xl md:text-3xl"
                            : "text-xl"
                        }`}
                      >
                        {article.title}
                      </h2>
                      <p className="text-text-secondary leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom note */}
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-center text-text-muted mt-16 text-lg font-body">
              Plus d&apos;articles à venir
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
