import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Orthèses plantaires' };

export default function OrthesesPlantairesPage() {
  return (
    <>
      <HeroBanner
        title="Orthèses plantaires"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Orthèses plantaires' }]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/ortheses-plantaires">
            <Image src="/images/ortheses-plantaires.png" alt="Orthèses plantaires" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />

            <h2>Une orthèse, c&apos;est quoi ?</h2>
            <p>Une orthèse c&apos;est un assemblage de plusieurs genres de matériaux avec différentes caractéristiques qui ont pour but de rétablir l&apos;équilibre plantaire en opposant des forces pour optimiser les mouvements naturels de votre corps.</p>
            <p>Oubliez les orthèses en vente libre à la pharmacie, ce qu&apos;il vous faut c&apos;est une orthèse faite entièrement sur-mesures par un professionnel !</p>

            <h3 style={{ marginTop: 32 }}>Les pathologies de pieds courantes</h3>
            <p>Même si nos pieds n&apos;ont jamais été aussi bien protégés, il y a toujours un risque de développer une pathologie. Voici quelques exemples que nous pouvons traiter avec une paire d&apos;orthèses plantaires :</p>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '16px 0', listStyle: 'none' }}>
              {['Tendinites du tendon d\'Achille', 'Épines de Lenoir', 'Fasciites plantaires', 'Entorses aux chevilles', 'Hallux Valgus (oignons)', 'Orteils marteaux', 'Arthrose / Arthrite', 'Plaies diabétiques'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green-accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ marginTop: 24 }}>Nos techniques de moulage</h3>
            <p>Chez Orthèse Conseil, nous utilisons différentes méthodes de thermoformage pour la prise d&apos;empreintes de vos pieds. L&apos;avantage est que vous êtes assuré de recevoir une paire d&apos;orthèses entièrement sur-mesure puisque la base de moulage, c&apos;est votre pied !</p>

            <h3 style={{ marginTop: 24 }}>La fabrication</h3>
            <p>Grâce à son expérience et à son savoir-faire, votre orthésiste s&apos;assurera que vos orthèses conviennent à vos besoins. Vous n&apos;êtes plus contraints aux grosses orthèses qui n&apos;entrent nulle part. Nous sommes en mesure de créer plusieurs types d&apos;orthèses plantaires que vous pourrez utiliser au travail ou dans vos loisirs.</p>

            <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: 24, marginTop: 24 }}>
              <h3 style={{ color: 'var(--blue-primary)', marginBottom: 8 }}>Vous n&apos;avez jamais consulté un orthésiste?</h3>
              <p>Appelez-nous au <a href="tel:450-403-4116" style={{ fontWeight: 600 }}>450 403-4116</a> ou remplissez <a href="/demande-de-consultation" style={{ fontWeight: 600 }}>notre formulaire en ligne</a>.</p>
            </div>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
