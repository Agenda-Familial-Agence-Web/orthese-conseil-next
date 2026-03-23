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
          <Link href="/nous-joindre" className="btn btn-lg" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>
            Nous joindre
          </Link>
        </div>
      </div>
    </section>
  );
}
