import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos de nous', href: '/a-propos-de-nous' },
  { label: 'Nos services', href: '/nos-services' },
  { label: 'Demande de consultation', href: '/demande-de-consultation' },
  { label: 'Prendre rendez-vous', href: '/prendre-rendez-vous' },
  { label: 'Conseils', href: '/conseils' },
  { label: 'Nous joindre', href: '/nous-joindre' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        {/* Column 1 — About */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Orthèse Conseil</h3>
          <p className={styles.about}>
            Orthèse Conseil est une clinique d&apos;orthèses et prothèses située à Chambly. Les orthésistes Éric Drasse et Marie Lefebvre vous accueillent de façon humaine et dynamique.
          </p>
        </div>

        {/* Column 2 — Navigation */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Navigation</h3>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Conseils */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Derniers conseils</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="/conseils#marche-enfant" className={styles.link}>
                Le développement de la marche chez l&apos;enfant
              </Link>
            </li>
            <li>
              <Link href="/conseils#sante-aines" className={styles.link}>
                Nous avons à cœur la santé de nos aînés
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Coordonnées</h3>
          <address className={styles.address}>
            <div className={styles.addressItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              <span>2082 Boul. Industriel<br />Chambly, QC J3L 4V2</span>
            </div>
            <div className={styles.addressItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:450-403-4116">450 403-4116</a>
            </div>
            <div className={styles.addressItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:info@ortheseconseil.com">info@ortheseconseil.com</a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p>© {new Date().getFullYear()} Orthèse Conseil. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
