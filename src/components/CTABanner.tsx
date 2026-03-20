import Link from 'next/link';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  phone?: string;
}

export default function CTABanner({
  title = "N'hésitez pas à prendre un rendez-vous avec nous !",
  subtitle = "Appelez-nous au 450 403-4116 pour prendre rendez-vous ou faites votre demande en ligne.",
  buttonText = "Prendre un rendez-vous",
  buttonHref = "/prendre-rendez-vous",
}: CTABannerProps) {
  return (
    <section className={styles.cta}>
      <div className={styles.bg} />
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Link href={buttonHref} className="btn btn-green btn-lg">
            {buttonText}
          </Link>
          <a href="tel:450-403-4116" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            450 403-4116
          </a>
        </div>
      </div>
    </section>
  );
}
