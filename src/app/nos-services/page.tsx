import type { Metadata } from 'next';
import { Activity, Footprints, ShieldPlus, Baby, Hand, Droplets, Layers, Zap } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Nos services',
  description: 'Découvrez les services d\'Orthèse Conseil : orthèses plantaires, de genou, attelles, soins pédiatriques, bas de contention et plus.',
};

const servicesList = [
  { title: 'Évaluation biomécanique', description: 'Analyse complète de votre posture, démarche et biomécanique.', href: '/nos-services/evaluation-biomecanique', icon: <Activity size={32} color="var(--blue-primary)" /> },
  { title: 'Orthèses plantaires', description: 'Orthèses sur mesure fabriquées directement dans notre clinique.', href: '/nos-services/ortheses-plantaires', icon: <Footprints size={32} color="var(--blue-primary)" /> },
  { title: 'Orthèse de genou', description: 'Orthèses de genou pour stabiliser et protéger l\'articulation.', href: '/nos-services/orthese-de-genou', icon: <ShieldPlus size={32} color="var(--blue-primary)" /> },
  { title: 'Soins pédiatriques', description: 'Services orthopédiques spécialisés pour les enfants.', href: '/nos-services/services-pediatriques', icon: <Baby size={32} color="var(--blue-primary)" /> },
  { title: 'Attelle de poignet', description: 'Attelles sur mesure pour immobiliser et protéger le poignet.', href: '/nos-services/attelle-poignet', icon: <Hand size={32} color="var(--blue-primary)" /> },
  { title: 'Bas de contention', description: 'Bas de compression Sigvaris pour améliorer la circulation.', href: '/nos-services/bas-de-contention', icon: <Droplets size={32} color="var(--blue-primary)" /> },
  { title: 'Chaussures sur mesure', description: 'Chaussures thérapeutiques pour les pieds nécessitant un soutien spécialisé.', href: '/nos-services/chaussures-sur-mesure', icon: <Layers size={32} color="var(--blue-primary)" /> },
  { title: 'TENS et électrodes', description: 'Appareils TENS pour le soulagement de la douleur.', href: '/nos-services/tens-et-electrodes', icon: <Zap size={32} color="var(--blue-primary)" /> },
];

export default function ServicesPage() {
  return (
    <>
      <HeroBanner
        title="Nos services"
        breadcrumbs={[{ label: 'Nos services' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Des solutions orthopédiques complètes</h2>
            <p>De la tête aux pieds, notre équipe vous offre des services personnalisés et de qualité.</p>
          </div>
          <div className="grid-4">
            {servicesList.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
