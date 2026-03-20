export const siteConfig = {
  name: "Orthèse Conseil",
  description: "Clinique d'orthèses à Chambly — Orthèses plantaires, de genou, attelles et plus. 40+ ans d'expérience combinée.",
  url: "https://ortheseconseil.com",
  phone: {
    office: "450-403-4116",
    mobile: "514-742-4116",
  },
  email: "info@ortheseconseil.com",
  locations: [
    {
      name: "Clinique principale — Chambly",
      address: "2082 Boulevard Industriel, Chambly, QC J3L 4V2",
      mapUrl: "https://maps.google.com/?q=2082+Boulevard+Industriel+Chambly+QC",
      isPrimary: true,
    },
    {
      name: "Physio Passion — Saint-Césaire",
      address: "Saint-Césaire, QC",
      mapUrl: "",
      isPrimary: false,
      note: "Sur rendez-vous seulement",
    },
  ],
  hours: [
    { day: "Lundi", hours: "9h00 – 14h30" },
    { day: "Mardi", hours: "9h00 – 14h30" },
    { day: "Mercredi", hours: "9h00 – 20h00" },
    { day: "Jeudi", hours: "9h00 – 14h30" },
    { day: "Vendredi", hours: "9h00 – 17h00" },
    { day: "Samedi", hours: "9h00 – 12h00" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  social: {
    facebook: "https://www.facebook.com/ortheseconseil",
    google: "https://g.page/ortheseconseil",
  },
  founded: 2011,
  googleRating: 4.9,
  facebookRecommended: 98,
  insurances: ["RAMQ", "SAAQ", "CNESST", "MSSS"],
  memberships: ["AOPQ", "OTPQ", "CCCOP"],
};
