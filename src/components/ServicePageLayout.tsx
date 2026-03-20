import Link from 'next/link';
import styles from '@/styles/inner.module.css';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  currentService?: string;
}

const services = [
  { label: 'Évaluation biomécanique', href: '/nos-services/evaluation-biomecanique' },
  { label: 'Orthèses plantaires', href: '/nos-services/ortheses-plantaires' },
  { label: 'Orthèses de genou', href: '/nos-services/orthese-de-genou' },
  { label: 'Services pédiatriques', href: '/nos-services/services-pediatriques' },
  { label: 'Attelle et orthèse du poignet', href: '/nos-services/attelle-poignet' },
  { label: 'Bas de contention', href: '/nos-services/bas-de-contention' },
  { label: 'Chaussures sur mesure', href: '/nos-services/chaussures-sur-mesure' },
  { label: 'TENS et électrodes', href: '/nos-services/tens-et-electrodes' },
];

export default function ServicePageLayout({ children, currentService }: ServicePageLayoutProps) {
  return (
    <div className={styles.serviceLayout}>
      <div className={styles.serviceMain}>
        {children}
      </div>
      <aside className={styles.serviceSidebar}>
        <nav className={styles.sidebarNav}>
          <h3 className={styles.sidebarTitle}>Nos services</h3>
          <div className={styles.sidebarList}>
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className={`${styles.sidebarLink} ${currentService === svc.href ? styles.active : ''}`}
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </nav>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <Link href="/demande-de-consultation" className="btn btn-primary" style={{ width: '100%' }}>
            Demander une consultation
          </Link>
        </div>
      </aside>
    </div>
  );
}
