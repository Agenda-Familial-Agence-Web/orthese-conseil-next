import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import ServicePageLayout from '@/components/ServicePageLayout';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'TENS et électrodes' };

export default function TensElectrodesPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/2082A-Boul-Industriel-01272026_105316.jpg" title="TENS et électrodes" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services', href: '/nos-services' }, { label: 'TENS et électrodes' }]} />
      <section className={styles.pageContent}>
        <div className="container">
          <ServicePageLayout currentService="/nos-services/tens-et-electrodes">
            <Image src="/images/tens_electrodes.png" alt="TENS et électrodes" width={800} height={400} className={styles.contentImage} style={{ marginBottom: 32 }} />
            <h2>Neurostimulation électrique transcutanée</h2>
            <p>Appareils de neurostimulation électrique transcutanée et électrodes pour le soulagement non médicamenteux de la douleur chronique ou aiguë.</p>
            <p>Nous pouvons effectuer des soumissions pour les TENS et électrodes. Ces appareils thérapeutiques modernes vous permettent de gérer votre douleur de manière efficace et non invasive.</p>
            <p>Nos orthésistes vous guideront dans le choix du bon appareil et vous montreront comment l&apos;utiliser correctement pour maximiser les bienfaits du traitement.</p>
          </ServicePageLayout>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
