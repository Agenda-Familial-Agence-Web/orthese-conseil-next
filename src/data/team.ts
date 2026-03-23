export interface TeamMember {
  slug: string;
  name: string;
  firstName: string;
  title: string;
  experience: string;
  bio: string;
  certifications: string[];
  image: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    slug: "eric-drasse",
    name: "Éric Drasse",
    firstName: "Éric",
    title: "Orthésiste",
    experience: "25+ ans d'expérience",
    bio: "Éric Drasse est orthésiste depuis plus de 25 ans. Passionné par son métier, il a fondé Orthèse Conseil en 2011 avec la vision d'offrir des soins orthopédiques personnalisés et de haute qualité. Son expertise couvre l'ensemble des orthèses des membres inférieurs et supérieurs, avec une approche centrée sur le patient.",
    certifications: ["Membre OTPQ", "Membre AOPQ"],
    image: "/images/team/eric-et-marie-comptoir.jpg",
    specialties: ["Orthèses plantaires", "Orthèses de genou", "Évaluation biomécanique"],
  },
  {
    slug: "marie-lefebvre",
    name: "Marie Lefebvre",
    firstName: "Marie",
    title: "Orthésiste & Massothérapeute",
    experience: "20+ ans d'expérience",
    bio: "Marie Lefebvre cumule plus de 20 ans d'expérience comme orthésiste et massothérapeute. Sa double expertise lui permet d'offrir une approche globale du traitement, combinant l'orthopédie et la thérapie manuelle. Elle se spécialise notamment dans les soins pédiatriques et l'accompagnement des patients dans leur réhabilitation.",
    certifications: ["Membre OTPQ", "Membre AOPQ"],
    image: "/images/team/marie-consultation.jpg",
    specialties: ["Soins pédiatriques", "Massothérapie", "Orthèses plantaires"],
  },
];

export const teamPhoto = "/images/team/eric-et-marie-comptoir.jpg";
