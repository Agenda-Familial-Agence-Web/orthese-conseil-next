import Link from 'next/link';
import Image from 'next/image';
import { Activity, Footprints, ShieldPlus, Baby, Hand, Droplets, Layers, Zap } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';const infoBoxes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: 'Heures d\'ouverture',
    text: 'Du lundi au vendredi, et même le samedi sur rendez-vous.',
    link: { label: 'Voir l\'horaire complet', href: '/nous-joindre' },
    color: 'blue',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
    ),
    title: 'Rendez-vous',
    text: 'Appelez-nous au 450 403-4116 ou faites votre demande en ligne.',
    link: { label: 'Prendre rendez-vous', href: '/prendre-rendez-vous' },
    color: 'green',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    title: 'Adresse de Chambly',
    text: '2082 Boulevard Industriel, Chambly, QC J3L 4V2',
    link: { label: 'Voir nos coordonnées', href: '/nous-joindre' },
    color: 'blue',
  },
];

const services = [
  {
    title: 'Évaluation Biomécanique',
    description: 'La solution à vos douleurs commence par une bonne évaluation.',
    href: '/nos-services/evaluation-biomecanique',
    icon: <Activity size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Orthèses plantaires',
    description: 'Conception et ajustement d\'orthèses plantaires sur mesure pour votre confort de marche.',
    href: '/nos-services/ortheses-plantaires',
    icon: <Footprints size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Orthèses de genou',
    description: 'Appareillage orthopédique personnalisé pour stabiliser votre mobilité et soulager la douleur.',
    href: '/nos-services/orthese-de-genou',
    icon: <ShieldPlus size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Services pédiatriques',
    description: 'Solutions orthopédiques adaptées aux besoins spécifiques des enfants.',
    href: '/nos-services/services-pediatriques',
    icon: <Baby size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Attelles et orthèses du poignet',
    description: 'Favoriser la guérison et retrouver votre mobilité avec le bon appareillage.',
    href: '/nos-services/attelle-poignet',
    icon: <Hand size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Bas de contention',
    description: 'Bas thérapeutiques gradués pour améliorer la circulation et réduire l\'enflure.',
    href: '/nos-services/bas-de-contention',
    icon: <Droplets size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Chaussures sur mesure',
    description: 'Chaussures thérapeutiques et semelles conçues pour corriger la posture et soulager.',
    href: '/nos-services/chaussures-sur-mesure',
    icon: <Layers size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'TENS et électrodes',
    description: 'Neurostimulation électrique pour le soulagement non médicamenteux de la douleur.',
    href: '/nos-services/tens-et-electrodes',
    icon: <Zap size={32} color="var(--blue-primary)" />,
  },
];

const reasons = [
  { num: '01', title: 'Service d\'expérience', text: 'Plus de 25 ans d\'expérience combinée dans le domaine de l\'orthèse.' },
  { num: '02', title: 'Service plus humain', text: 'Des orthésistes passionnés qui sauront vous mettre en confiance.' },
  { num: '03', title: 'Orthésistes certifiés', text: 'Membres de l\'AOPQ, du CCCOP et de l\'OTPQ.' },
  { num: '04', title: 'Fabrication sur place', text: 'Qualité assurée, rapidité de livraison et ajustements sur place.' },
  { num: '05', title: 'Suivi attentionné', text: 'Toujours effectué par le même orthésiste assigné.' },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>Clinique d&apos;orthèses et prothèses à Chambly</span>
            <h1 className={styles.heroTitle}>
              Votre boutique <span className={styles.heroHighlight}>orthopédique</span>
            </h1>
            <p className={styles.heroDesc}>
              Orthèse Conseil vous accueille de façon humaine et dynamique. Vivez une expérience agréable et différente avec nos orthésistes certifiés.
            </p>
            <div className={styles.heroActions}>
              <Link href="/prendre-rendez-vous" className="btn btn-green btn-lg">
                Prendre rendez-vous
              </Link>
              <Link href="/nos-services" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.8)', color: 'white', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INFO BOXES ========== */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            {infoBoxes.map((box, i) => (
              <div key={i} className={`${styles.infoBox} ${styles[`info${box.color}`]}`}>
                <div className={styles.infoIcon}>{box.icon}</div>
                <h3 className={styles.infoTitle}>{box.title}</h3>
                <p className={styles.infoText}>{box.text}</p>
                <Link href={box.link.href} className={styles.infoLink}>
                  {box.link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/hero-clinic.jpg"
                alt="La clinique Orthèse Conseil"
                width={560}
                height={400}
                className={styles.aboutPhoto}
              />
              <div className={styles.aboutBadge}>
                <span className={styles.badgeNumber}>25+</span>
                <span className={styles.badgeText}>années d&apos;expérience</span>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>À propos de nous</span>
              <h2>Orthèse Conseil, votre boutique orthopédique de confiance</h2>
              <p>
                Chez Orthèse Conseil, ce n&apos;est pas compliqué. Vous ne croiserez pas huit secrétaires et quinze assistantes avant de rencontrer votre orthésiste. Nous avons décidé de vous donner un service plus humain !
              </p>
              <p>
                Nous offrons un environnement dédié à l&apos;écoute de vos problèmes et des douleurs occasionnées par l&apos;instabilité de votre biomécanique. La qualité avant la quantité, toujours.
              </p>
              <Link href="/a-propos-de-nous" className="btn btn-primary">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 10 RAISONS ========== */}
      <section className={`section section-alt ${styles.reasonsSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Pourquoi choisir Orthèse Conseil ?</h2>
            <p>Découvrez ce qui fait notre différence depuis plus de 25 ans</p>
          </div>
          <div className={styles.reasonsGrid}>
            {reasons.map((reason) => (
              <div key={reason.num} className={styles.reasonCard}>
                <span className={styles.reasonNum}>{reason.num}</span>
                <div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonText}>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/10-raisons-pourquoi-nous-choisir" className="btn btn-secondary">
              Voir les 10 raisons
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Orthèses et services pour vos douleurs</h2>
            <p>Des solutions personnalisées pour toute la famille</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <CTABanner />
    </>
  );
}
