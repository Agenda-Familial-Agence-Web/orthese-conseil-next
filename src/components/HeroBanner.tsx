import Link from 'next/link';
import styles from './HeroBanner.module.css';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroBannerProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  compact?: boolean;
}

export default function HeroBanner({ title, breadcrumbs, compact }: HeroBannerProps) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        {breadcrumbs && (
          <nav className={styles.breadcrumbs}>
            <Link href="/">Accueil</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                <span className={styles.separator}>/</span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className={styles.current}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}
