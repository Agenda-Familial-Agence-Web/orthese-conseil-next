import Link from 'next/link';
import styles from './HeroBanner.module.css';

interface HeroBannerProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  compact?: boolean;
}

export default function HeroBanner({ title, breadcrumbs, backgroundImage, compact }: HeroBannerProps) {
  return (
    <section
      className={`${styles.hero} ${compact ? styles.compact : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className={styles.breadcrumb}>
                {i > 0 && <span className={styles.separator}>/</span>}
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
