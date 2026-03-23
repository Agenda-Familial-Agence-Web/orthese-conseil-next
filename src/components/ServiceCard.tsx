import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
}

export default function ServiceCard({ title, description, href, icon, image }: ServiceCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.iconWrap}>
        {image ? (
          <Image src={image} alt={title} width={50} height={50} className={styles.iconWrap + ' ' + 'img'} />
        ) : icon ? (
          icon
        ) : null}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.link}>
        En savoir plus
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </span>
    </Link>
  );
}
