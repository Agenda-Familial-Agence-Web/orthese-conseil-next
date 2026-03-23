export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  features: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  coverage: string[];
  seo: { title: string; description: string };
}

export const services: Service[] = [
  {
    slug: "evaluation-biomecanique",
    name: "Évaluation biomécanique",
    shortDescription: "Analyse complète de votre posture, démarche et biomécanique pour un diagnostic précis.",
    fullDescription: "L'évaluation biomécanique est la première étape essentielle de votre traitement. Notre équipe procède à une analyse approfondie de votre posture, de votre démarche et de la biomécanique de vos membres inférieurs. Cette évaluation nous permet d'identifier les déséquilibres et de concevoir un plan de traitement personnalisé adapté à vos besoins spécifiques.",
    icon: "/images/services/evaluation-biomecanique.png",
    heroImage: "/images/team/evaluation-biomecanique.jpg",
    features: [
      { title: "Analyse posturale complète", description: "Évaluation détaillée de votre posture debout et en mouvement." },
      { title: "Analyse de la démarche", description: "Observation et analyse de votre patron de marche et de course." },
      { title: "Examen articulaire", description: "Vérification de la mobilité et de l'alignement de vos articulations." },
      { title: "Plan de traitement personnalisé", description: "Recommandations adaptées à votre condition et vos objectifs." },
    ],
    process: [
      { step: 1, title: "Prise de rendez-vous", description: "Contactez-nous par téléphone ou en ligne pour planifier votre évaluation." },
      { step: 2, title: "Évaluation initiale", description: "Rencontre d'environ 45-60 minutes avec votre orthésiste." },
      { step: 3, title: "Analyse et diagnostic", description: "Analyse approfondie des résultats et identification des problèmes." },
      { step: 4, title: "Plan de traitement", description: "Présentation des recommandations et options de traitement." },
    ],
    coverage: ["RAMQ", "SAAQ", "CNESST", "Assurances privées"],
    seo: {
      title: "Évaluation biomécanique — Orthèse Conseil Chambly",
      description: "Évaluation biomécanique complète à Chambly. Analyse posturale, démarche et articulations. Orthésistes certifiés avec 40+ ans d'expérience.",
    },
  },
  {
    slug: "ortheses-plantaires",
    name: "Orthèses plantaires",
    shortDescription: "Orthèses plantaires sur mesure pour corriger l'alignement et soulager les douleurs aux pieds.",
    fullDescription: "Nos orthèses plantaires sont fabriquées sur mesure dans notre clinique à Chambly. Conçues à partir d'une évaluation biomécanique complète, elles corrigent les déséquilibres biomécaniques du pied et soulagent efficacement les douleurs aux pieds, genoux, hanches et dos. Chaque paire est unique et adaptée à votre morphologie et vos activités.",
    icon: "/images/services/ortheses-plantaires.png",
    heroImage: "/images/services/ortheses-plantaires.png",
    features: [
      { title: "Fabrication sur place", description: "Vos orthèses sont fabriquées directement dans notre clinique pour un contrôle qualité optimal." },
      { title: "Matériaux de haute qualité", description: "Utilisation de matériaux durables et confortables adaptés à votre niveau d'activité." },
      { title: "Ajustements inclus", description: "Suivi personnalisé avec ajustements gratuits pour un confort optimal." },
      { title: "Pour tous les âges", description: "Orthèses adaptées aux enfants, adultes et personnes âgées." },
    ],
    process: [
      { step: 1, title: "Évaluation biomécanique", description: "Analyse complète de votre posture et démarche." },
      { step: 2, title: "Prise d'empreintes", description: "Moulage précis de vos pieds pour une fabrication sur mesure." },
      { step: 3, title: "Fabrication", description: "Conception et fabrication de vos orthèses dans notre atelier." },
      { step: 4, title: "Essayage et ajustements", description: "Vérification du confort et ajustements si nécessaire." },
      { step: 5, title: "Suivi", description: "Rendez-vous de suivi pour assurer votre satisfaction." },
    ],
    coverage: ["RAMQ", "SAAQ", "CNESST", "MSSS", "Assurances privées"],
    seo: {
      title: "Orthèses plantaires sur mesure — Orthèse Conseil Chambly",
      description: "Orthèses plantaires sur mesure fabriquées à Chambly. Soulagement des douleurs aux pieds, genoux et dos. Couvertes par RAMQ, SAAQ, CNESST.",
    },
  },
  {
    slug: "orthese-de-genou",
    name: "Orthèse de genou",
    shortDescription: "Orthèses de genou sur mesure pour stabiliser et protéger l'articulation du genou.",
    fullDescription: "Nos orthèses de genou sont conçues pour stabiliser, protéger et soutenir l'articulation du genou suite à une blessure, une chirurgie ou pour une condition chronique. Que ce soit pour l'arthrose, une entorse ligamentaire ou une reconstruction du LCA, nous offrons des solutions adaptées à votre condition.",
    icon: "/images/services/orthese-genou.png",
    heroImage: "/images/services/orthese-genou-photo.jpg",
    features: [
      { title: "Orthèses ligamentaires", description: "Protection et stabilisation après entorse ou reconstruction ligamentaire." },
      { title: "Orthèses pour arthrose", description: "Soulagement de la douleur et correction de l'alignement du genou arthrosique." },
      { title: "Orthèses sportives", description: "Protection optimale pour le retour au sport en toute sécurité." },
      { title: "Ajustement précis", description: "Chaque orthèse est ajustée avec précision pour un confort et une efficacité maximale." },
    ],
    process: [
      { step: 1, title: "Évaluation", description: "Examen de votre genou et discussion de vos besoins." },
      { step: 2, title: "Prise de mesures", description: "Mesures précises pour un ajustement parfait." },
      { step: 3, title: "Sélection du modèle", description: "Choix de l'orthèse adaptée à votre condition et activités." },
      { step: 4, title: "Ajustement et enseignement", description: "Mise en place de l'orthèse et instructions d'utilisation." },
    ],
    coverage: ["RAMQ", "SAAQ", "CNESST", "Assurances privées"],
    seo: {
      title: "Orthèse de genou sur mesure — Orthèse Conseil Chambly",
      description: "Orthèses de genou pour arthrose, entorse et sport. Ajustement professionnel à Chambly. Couvertes par RAMQ, SAAQ, CNESST.",
    },
  },
  {
    slug: "attelle-poignet",
    name: "Attelle de poignet",
    shortDescription: "Attelles de poignet sur mesure pour immobiliser et protéger le poignet blessé.",
    fullDescription: "Nos attelles de poignet offrent un soutien optimal pour les blessures au poignet, le syndrome du tunnel carpien, les tendinites et les conditions post-chirurgicales. Fabriquées ou ajustées sur mesure, elles assurent une immobilisation adéquate tout en permettant un confort au quotidien.",
    icon: "/images/services/attelle-poignet.png",
    heroImage: "/images/services/orthese-poignet-photo.jpg",
    features: [
      { title: "Tunnel carpien", description: "Attelles de repos nocturne et de jour pour le syndrome du tunnel carpien." },
      { title: "Post-chirurgical", description: "Immobilisation adaptée suite à une chirurgie du poignet." },
      { title: "Tendinite", description: "Support pour tendinite de De Quervain et autres conditions inflammatoires." },
      { title: "Sur mesure", description: "Moulage thermoplastique pour un ajustement parfait à votre anatomie." },
    ],
    process: [
      { step: 1, title: "Consultation", description: "Évaluation de votre condition et discussion des options." },
      { step: 2, title: "Fabrication", description: "Moulage et fabrication de votre attelle sur place." },
      { step: 3, title: "Ajustement", description: "Vérification du confort et de l'efficacité." },
      { step: 4, title: "Suivi", description: "Ajustements si nécessaire lors de la guérison." },
    ],
    coverage: ["SAAQ", "CNESST", "Assurances privées"],
    seo: {
      title: "Attelle de poignet sur mesure — Orthèse Conseil Chambly",
      description: "Attelles de poignet pour tunnel carpien, tendinite et post-chirurgie. Fabrication sur mesure à Chambly.",
    },
  },
  {
    slug: "services-pediatriques",
    name: "Soins pédiatriques",
    shortDescription: "Services orthopédiques spécialisés pour les enfants : orthèses plantaires, casques crâniens et dépistage postural.",
    fullDescription: "Notre équipe offre des services orthopédiques adaptés aux besoins spécifiques des enfants. Du casque crânien pour les nourrissons aux orthèses plantaires pour les enfants actifs, en passant par le dépistage postural scolaire, nous accompagnons le développement sain de vos enfants avec une approche douce et rassurante.",
    icon: "/images/services/soins-pediatriques.png",
    heroImage: "/images/services/soins-pediatriques.png",
    features: [
      { title: "Casque crânien (orthèse crânienne)", description: "Correction de la plagiocéphalie et autres asymétries crâniennes chez le nourrisson." },
      { title: "Orthèses plantaires enfants", description: "Orthèses adaptées à la croissance et au niveau d'activité de l'enfant." },
      { title: "Dépistage postural", description: "Évaluation de la posture et de la démarche pour prévenir les problèmes futurs." },
      { title: "Approche adaptée", description: "Environnement accueillant et approche douce pour mettre les enfants à l'aise." },
    ],
    process: [
      { step: 1, title: "Consultation initiale", description: "Discussion avec les parents et évaluation de l'enfant." },
      { step: 2, title: "Évaluation", description: "Examen adapté à l'âge et à la condition de l'enfant." },
      { step: 3, title: "Traitement", description: "Fabrication et ajustement de l'orthèse ou appareil." },
      { step: 4, title: "Suivi régulier", description: "Ajustements réguliers pour accompagner la croissance." },
    ],
    coverage: ["RAMQ", "SAAQ", "CNESST", "Assurances privées"],
    seo: {
      title: "Soins pédiatriques orthopédiques — Orthèse Conseil Chambly",
      description: "Services orthopédiques pour enfants à Chambly. Casque crânien, orthèses plantaires, dépistage postural. Approche douce et professionnelle.",
    },
  },
  {
    slug: "bas-de-contention",
    name: "Bas de contention",
    shortDescription: "Bas de compression Sigvaris pour améliorer la circulation et soulager les jambes lourdes.",
    fullDescription: "Nous offrons une gamme complète de bas de compression Sigvaris, la référence mondiale en matière de compression médicale. Que ce soit pour des jambes lourdes, des varices, une insuffisance veineuse ou en prévention, nos orthésistes vous aident à choisir le bon niveau de compression et le bon modèle pour vos besoins.",
    icon: "/images/services/bas-contention.png",
    heroImage: "/images/services/bas-contention.png",
    features: [
      { title: "Marque Sigvaris", description: "Produits de compression de qualité suisse, leader mondial." },
      { title: "Prise de mesures", description: "Mesures précises pour un ajustement et une compression optimale." },
      { title: "Variété de modèles", description: "Bas, mi-bas, collants dans une variété de couleurs et styles." },
      { title: "Niveaux de compression", description: "De la compression légère à forte selon votre prescription." },
    ],
    process: [
      { step: 1, title: "Consultation", description: "Discussion de vos symptômes et besoins." },
      { step: 2, title: "Prise de mesures", description: "Mesures précises de vos jambes le matin de préférence." },
      { step: 3, title: "Sélection", description: "Choix du modèle, couleur et niveau de compression." },
      { step: 4, title: "Enseignement", description: "Instructions pour enfiler et entretenir vos bas." },
    ],
    coverage: ["Assurances privées"],
    seo: {
      title: "Bas de contention Sigvaris — Orthèse Conseil Chambly",
      description: "Bas de compression Sigvaris à Chambly. Prise de mesures professionnelle. Soulagement des jambes lourdes et varices.",
    },
  },
  {
    slug: "chaussures-sur-mesure",
    name: "Chaussures sur mesure",
    shortDescription: "Chaussures thérapeutiques sur mesure pour les pieds nécessitant un soutien spécialisé.",
    fullDescription: "Pour les personnes ayant des besoins particuliers qui ne peuvent être comblés par des chaussures régulières avec orthèses, nous offrons des chaussures thérapeutiques sur mesure. Conçues pour accommoder des déformations, des pieds diabétiques ou d'autres conditions complexes, ces chaussures allient confort, fonction et esthétique.",
    icon: "/images/services/chaussures-orthopediques.png",
    heroImage: "/images/services/chaussures-orthopediques.png",
    features: [
      { title: "Sur mesure complet", description: "Chaussures fabriquées selon les mesures exactes de vos pieds." },
      { title: "Pied diabétique", description: "Chaussures adaptées pour prévenir les complications du diabète." },
      { title: "Déformations", description: "Accommodation des hallux valgus, orteils marteaux et autres déformations." },
      { title: "Modifications", description: "Modifications de chaussures existantes (talonnettes, semelles compensées)." },
    ],
    process: [
      { step: 1, title: "Évaluation", description: "Examen de vos pieds et discussion de vos besoins." },
      { step: 2, title: "Prise de mesures", description: "Mesures et moulages détaillés de vos pieds." },
      { step: 3, title: "Conception", description: "Design de la chaussure adaptée à votre condition." },
      { step: 4, title: "Fabrication", description: "Fabrication par nos partenaires spécialisés." },
      { step: 5, title: "Essayage", description: "Vérification de l'ajustement et modifications si nécessaire." },
    ],
    coverage: ["RAMQ", "SAAQ", "CNESST", "Assurances privées"],
    seo: {
      title: "Chaussures sur mesure thérapeutiques — Orthèse Conseil Chambly",
      description: "Chaussures thérapeutiques sur mesure à Chambly. Pied diabétique, déformations, besoins spéciaux. Couvertes par RAMQ.",
    },
  },
  {
    slug: "tens-et-electrodes",
    name: "TENS et électrodes",
    shortDescription: "Appareils TENS pour le soulagement de la douleur par électrostimulation à domicile.",
    fullDescription: "Nous offrons des appareils de neurostimulation électrique transcutanée (TENS) pour le soulagement de la douleur à domicile. Ces appareils portables et faciles d'utilisation permettent de gérer la douleur chronique ou aiguë de façon non médicamenteuse. Notre équipe vous accompagne dans le choix et l'utilisation de l'appareil.",
    icon: "/images/tens_electrodes.png",
    heroImage: "/images/2082A-Boul-Industriel-01272026_105316.jpg",
    features: [
      { title: "Appareils portables", description: "TENS compacts et faciles à utiliser au quotidien." },
      { title: "Sans médicament", description: "Soulagement naturel de la douleur par électrostimulation." },
      { title: "Formation incluse", description: "Enseignement complet sur l'utilisation et le placement des électrodes." },
      { title: "Électrodes de remplacement", description: "Approvisionnement en électrodes et accessoires." },
    ],
    process: [
      { step: 1, title: "Consultation", description: "Évaluation de votre douleur et discussion des options." },
      { step: 2, title: "Sélection", description: "Choix de l'appareil adapté à votre condition." },
      { step: 3, title: "Formation", description: "Enseignement sur l'utilisation et le placement des électrodes." },
      { step: 4, title: "Suivi", description: "Accompagnement pour optimiser l'utilisation." },
    ],
    coverage: ["CNESST", "Assurances privées"],
    seo: {
      title: "TENS et électrodes — Orthèse Conseil Chambly",
      description: "Appareils TENS pour soulagement de la douleur à Chambly. Neurostimulation électrique, formation et suivi inclus.",
    },
  },
];
