'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Activity, Footprints, ShieldPlus, Baby, Hand, Droplets, Layers, Zap } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import TiltCard from '@/components/TiltCard';
import SplitText from '@/components/SplitText';
import styles from './page.module.css';

const infoBoxes = [
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
    title: 'Orthèses Plantaires',
    description: 'Orthèses sur mesure fabriquées directement dans notre clinique.',
    href: '/nos-services/ortheses-plantaires',
    icon: <Footprints size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Orthèses de Genou',
    description: 'Le soutien nécessaire pour retrouver votre mobilité en confiance.',
    href: '/nos-services/orthese-de-genou',
    icon: <ShieldPlus size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Services Pédiatriques',
    description: 'Solutions adaptées aux besoins spécifiques des tout-petits.',
    href: '/nos-services/services-pediatriques',
    icon: <Baby size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Attelles & Poignet',
    description: 'Favoriser la guérison et retrouver votre mobilité rapidement.',
    href: '/nos-services/attelle-poignet',
    icon: <Hand size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Bas de Contention',
    description: 'Vaste inventaire pour vos besoins de compression veineuse.',
    href: '/nos-services/bas-de-contention',
    icon: <Droplets size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'Chaussures sur Mesure',
    description: 'Chaussures thérapeutiques conçues pour corriger la posture.',
    href: '/nos-services/chaussures-sur-mesure',
    icon: <Layers size={32} color="var(--blue-primary)" />,
  },
  {
    title: 'TENS & Électrodes',
    description: 'Neurostimulation électrique pour soulagement de la douleur.',
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
            <ScrollReveal delay={0.1}>
              <span className={styles.heroTag}>Clinique d&apos;orthèses et prothèses à Chambly</span>
            </ScrollReveal>
            <SplitText as="h1" className={styles.heroTitle} delay={0.3}>
              Votre boutique orthopédique
            </SplitText>
            <ScrollReveal delay={0.6}>
              <p className={styles.heroDesc}>
                Orthèse Conseil vous accueille de façon humaine et dynamique. Vivez une expérience agréable et différente avec nos orthésistes certifiés.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
              <div className={styles.heroActions}>
                <Link href="/prendre-rendez-vous" className="btn btn-green btn-lg">
                  Prendre rendez-vous
                </Link>
                <Link href="/nos-services" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.8)', color: 'white', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                  Nos services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
        </div>
      </section>

      {/* ========== INFO BOXES ========== */}
      <section className={styles.infoSection}>
        <div className="container">
          <StaggerContainer className={styles.infoGrid} staggerDelay={0.15}>
            {infoBoxes.map((box, i) => (
              <StaggerItem key={i}>
                <TiltCard className={`${styles.infoBox} ${styles[`info${box.color}`]}`} tiltAmount={5}>
                  <div className={styles.infoIcon}>{box.icon}</div>
                  <h3 className={styles.infoTitle}>{box.title}</h3>
                  <p className={styles.infoText}>{box.text}</p>
                  <Link href={box.link.href} className={styles.infoLink}>
                    {box.link.label} <span>→</span>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== KEY FIGURES ========== */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <StaggerContainer className={styles.statsGrid} staggerDelay={0.1}>
            <StaggerItem>
              <div className={styles.statItem}>
                <AnimatedCounter target={25} suffix="+" className={styles.statNumber} />
                <span className={styles.statLabel}>Années d&apos;expérience</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.statItem}>
                <AnimatedCounter target={10000} suffix="+" className={styles.statNumber} />
                <span className={styles.statLabel}>Patients satisfaits</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.statItem}>
                <AnimatedCounter target={8} className={styles.statNumber} />
                <span className={styles.statLabel}>Services spécialisés</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.statItem}>
                <AnimatedCounter target={100} suffix="%" className={styles.statNumber} />
                <span className={styles.statLabel}>Fabrication locale</span>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className={`section section-alt`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <ScrollReveal direction="left">
              <div className={styles.aboutImage}>
                <Image
                  src="/images/2082A-Boul-Industriel-Photo-1.jpg"
                  alt="Clinique Orthèse Conseil"
                  width={600}
                  height={450}
                  className={styles.aboutPhoto}
                />
                <div className={styles.aboutBadge}>
                  <span className={styles.badgeNumber}>25+</span>
                  <span className={styles.badgeText}>ans d&apos;expérience</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.aboutContent}>
                <span className={styles.sectionLabel}>À propos de nous</span>
                <h2>Orthèse Conseil, votre boutique orthopédique de confiance</h2>
                <p>
                  Chez Orthèse Conseil, ce n&apos;est pas compliqué. Vous ne croiserez pas huit secrétaires et quinze assistantes avant de rencontrer votre orthésiste. Nous avons décidé de vous donner un service plus humain !
                </p>
                <p>
                  Notre clinique est composée de deux orthésistes d&apos;expérience. Éric et Marie vous accueillent dans un environnement chaleureux au cœur de Chambly.
                </p>
                <Link href="/a-propos-de-nous" className="btn btn-primary">
                  En savoir plus
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== REASONS ========== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Pourquoi nous choisir</h2>
              <p>Découvrez ce qui fait notre différence depuis plus de 25 ans.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className={styles.reasonsGrid} staggerDelay={0.08}>
            {reasons.map((r) => (
              <StaggerItem key={r.num}>
                <TiltCard className={styles.reasonCard} tiltAmount={4}>
                  <div className={styles.reasonNum}>{r.num}</div>
                  <div>
                    <h4 className={styles.reasonTitle}>{r.title}</h4>
                    <p className={styles.reasonText}>{r.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/10-raisons-pourquoi-nous-choisir" className="btn btn-secondary">
                Toutes nos raisons →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SERVICES (Bento Grid) ========== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Nos services</h2>
              <p>Des solutions orthopédiques complètes, de la tête aux pieds.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className={styles.servicesGrid} staggerDelay={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.href}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <CTABanner />
    </>
  );
}
