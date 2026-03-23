'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const services = [
  { label: 'Tous les services', href: '/nos-services' },
  { label: 'Évaluation biomécanique', href: '/nos-services/evaluation-biomecanique' },
  { label: 'Orthèses plantaires', href: '/nos-services/ortheses-plantaires' },
  { label: 'Orthèses de genou', href: '/nos-services/orthese-de-genou' },
  { label: 'Services pédiatriques', href: '/nos-services/services-pediatriques' },
  { label: 'Attelle et orthèse du poignet', href: '/nos-services/attelle-poignet' },
  { label: 'Bas de contention', href: '/nos-services/bas-de-contention' },
  { label: 'Chaussures sur mesure', href: '/nos-services/chaussures-sur-mesure' },
  { label: 'TENS et électrodes', href: '/nos-services/tens-et-electrodes' },
];

const aboutItems = [
  { label: 'Description de la clinique', href: '/a-propos-de-nous' },
  { label: 'Notre approche', href: '/a-propos-de-nous/notre-approche' },
  { label: '10 raisons pourquoi nous choisir', href: '/10-raisons-pourquoi-nous-choisir' },
  { label: 'Visite de la clinique', href: '/a-propos-de-nous/visite-de-la-clinique' },
  { label: 'Profil d\'Éric Drasse', href: '/a-propos-de-nous/eric-drasse' },
  { label: 'Profil de Marie Lefebvre', href: '/a-propos-de-nous/marie-lefebvre' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <a href="tel:450-403-4116" className={styles.topBarLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              450 403-4116
            </a>
            <a href="mailto:info@ortheseconseil.com" className={styles.topBarLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@ortheseconseil.com
            </a>
          </div>
          <div className={styles.topBarRight}>
            <a href="tel:450-403-4116" className={styles.topBarLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Appelez-nous
            </a>
          </div>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerInner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/orthese-logo-header-retina-1.png"
              alt="Orthèse Conseil"
              width={240}
              height={60}
              priority
            />
          </Link>

          <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`} onClick={() => setMobileOpen(false)}>Accueil</Link>
              </li>

              <li
                className={`${styles.navItem} ${styles.hasDropdown}`}
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`${styles.navLink} ${isActive('/a-propos-de-nous') || isActive('/10-raisons') ? styles.navLinkActive : ''}`} onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}>
                  À propos
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <ul className={`${styles.dropdown} ${activeDropdown === 'about' ? styles.dropdownOpen : ''}`}>
                  {aboutItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={styles.dropdownLink} onClick={() => { setMobileOpen(false); setActiveDropdown(null); }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li
                className={`${styles.navItem} ${styles.hasDropdown}`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`${styles.navLink} ${isActive('/nos-services') ? styles.navLinkActive : ''}`} onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}>
                  Nos services
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <ul className={`${styles.dropdown} ${activeDropdown === 'services' ? styles.dropdownOpen : ''}`}>
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={styles.dropdownLink} onClick={() => { setMobileOpen(false); setActiveDropdown(null); }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={styles.navItem}>
                <Link href="/demande-de-consultation" className={`${styles.navLink} ${isActive('/demande-de-consultation') ? styles.navLinkActive : ''}`} onClick={() => setMobileOpen(false)}>Consultation</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/conseils" className={`${styles.navLink} ${isActive('/conseils') ? styles.navLinkActive : ''}`} onClick={() => setMobileOpen(false)}>Conseils</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/nous-joindre" className={`${styles.navLink} ${isActive('/nous-joindre') ? styles.navLinkActive : ''}`} onClick={() => setMobileOpen(false)}>Nous joindre</Link>
              </li>
            </ul>
            <Link href="/prendre-rendez-vous" className={`btn btn-primary btn-sm ${styles.navCTA}`} onClick={() => setMobileOpen(false)}>
              Prendre rendez-vous
            </Link>
          </nav>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
    </>
  );
}
