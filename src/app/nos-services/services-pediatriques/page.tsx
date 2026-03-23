import type { Metadata } from 'next';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Services pédiatriques' };

export default function ServicesPediatriquesPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/services_pediatriques.png" title="Services pédiatriques" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'Services pédiatriques' }]} />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/services-pediatriques">
            <Image src="/images/services_pediatriques.png" alt="Services pédiatriques" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>Nous avons la santé de vos enfants à cœur</h2>
            <p>Solutions orthopédiques adaptées aux besoins spécifiques des enfants pour accompagner leur croissance et leur développement moteur.</p>
            <p>Nos orthésistes sont formés pour évaluer et traiter les enfants de tous âges, des tout-petits aux adolescents. Nous comprenons l&apos;importance de détecter et corriger les problèmes biomécaniques tôt pour assurer un développement sain.</p>
            <div style={{ background: 'var(--green-light)', borderRadius: 'var(--radius-md)', padding: 24, marginTop: 24 }}>
              <h3 style={{ color: 'var(--green-hover)', marginBottom: 8 }}>Pour toute la famille</h3>
              <p>Nos services sont offerts à toute la famille, à partir de zéro jusqu&apos;à 107 ans !</p>
            </div>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
