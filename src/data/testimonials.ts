export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  source: "google";
}

export const testimonials: Testimonial[] = [
  {
    name: "Sophie M.",
    rating: 5,
    text: "Service exceptionnel! Éric a pris le temps de bien évaluer ma condition et mes orthèses plantaires ont changé ma vie. Plus aucune douleur aux pieds après des années de souffrance.",
    date: "2025-11",
    source: "google",
  },
  {
    name: "Jean-Pierre L.",
    rating: 5,
    text: "Très professionnel et accueillant. Marie m'a bien expliqué le fonctionnement de mon orthèse de genou. Le suivi est impeccable, je recommande à 100%.",
    date: "2025-10",
    source: "google",
  },
  {
    name: "Isabelle R.",
    rating: 5,
    text: "Mon fils de 4 ans avait besoin d'un casque crânien. L'équipe a été formidable avec lui, très douce et rassurante. Les résultats sont remarquables.",
    date: "2025-09",
    source: "google",
  },
  {
    name: "Marc D.",
    rating: 5,
    text: "Après ma chirurgie au genou, Éric m'a fait une orthèse parfaitement ajustée. Le retour au sport s'est fait en toute confiance. Merci!",
    date: "2025-08",
    source: "google",
  },
  {
    name: "Catherine B.",
    rating: 5,
    text: "Excellente clinique! Enfin des professionnels qui prennent le temps d'écouter. Mes nouvelles orthèses sont super confortables.",
    date: "2025-07",
    source: "google",
  },
  {
    name: "Robert T.",
    rating: 5,
    text: "Je suis client depuis 10 ans. Toujours un service de qualité et un suivi personnalisé. C'est rare de trouver autant de dévouement.",
    date: "2025-06",
    source: "google",
  },
  {
    name: "Nathalie G.",
    rating: 5,
    text: "Les bas de compression Sigvaris m'ont été recommandés et bien ajustés. Un vrai soulagement pour mes jambes lourdes. Personnel très compétent.",
    date: "2025-05",
    source: "google",
  },
  {
    name: "François P.",
    rating: 5,
    text: "Clinique moderne et chaleureuse. L'évaluation biomécanique était très complète. On sent que l'équipe maîtrise son domaine.",
    date: "2025-04",
    source: "google",
  },
];
