import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'Nos services' };

const services = [
  { title: 'Évaluation biomécanique', description: 'À votre arrivée à la clinique, tout commence par une bonne évaluation.', href: '/nos-services/evaluation-biomecanique', image: '/images/Évaluation biomechanique.jpg' },
  { title: 'Orthèses plantaires', description: "Qu'est-ce qu'une orthèse. Les pathologies de pieds courantes. Nos techniques de moulage. La fabrication.", href: '/nos-services/ortheses-plantaires', image: '/images/ortheses_plantaires.png' },
  { title: 'Orthèses de genou', description: 'Nous apportons le soutien nécessaire à votre mobilité.', href: '/nos-services/orthese-de-genou', image: '/images/orthèse de genou.jpg' },
  { title: 'Services pédiatriques', description: 'Nous avons la santé de vos enfants à cœur.', href: '/nos-services/services-pediatriques', image: "/images/services_pediatriques.png" },
  { title: 'Attelles et orthèses du poignet', description: 'Favoriser la guérison et retrouver votre mobilité.', href: '/nos-services/attelle-poignet', image: '/images/Orthèse du poignet.jpg' },
  { title: 'Bas de contention', description: 'Œdèmes, problèmes de pression? Nous avons un vaste inventaire.', href: '/nos-services/bas-de-contention', image: '/images/bas_contention.png' },
  { title: 'Chaussures sur mesure', description: 'Trouvez enfin chaussure à votre pied.', href: '/nos-services/chaussures-sur-mesure', image: '/images/chaussures_mesure.png' },
  { title: 'TENS et électrodes', description: 'Nous pouvons effectuer des soumissions pour les TENS et électrodes.', href: '/nos-services/tens-et-electrodes', icon: '⚡' },
];

export default function NosServicesPage() {
  return (
    <>
      <HeroBanner backgroundImage="/images/2082A-Boul-Industriel-01272026_105257.jpg"
        title="Nos services"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Nos services' }]}
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Des services personnalisés pour vous</h2>
            <p>Nos services d&apos;orthèses et de prothèses sont entièrement personnalisés à vos besoins.</p>
          </div>
          <div className="grid-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
