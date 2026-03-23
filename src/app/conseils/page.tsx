import type { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: 'Conseils' };

const articles = [
  {
    id: "marche-enfant",
    title: "Le développement de la marche chez l'enfant, c'est important !",
    excerpt: "Découvrez comment accompagner le développement moteur de votre enfant et quand consulter un orthésiste.",
    category: "Enfants",
  },
  {
    id: "sante-aines",
    title: "Nous avons à cœur la santé de nos aînés",
    excerpt: "Les solutions orthopédiques adaptées pour les personnes âgées afin d'améliorer leur qualité de vie.",
    category: "Aînés",
  },
];

export default function ConseilsPage() {
  return (
    <>
      <HeroBanner
        title="Conseils"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Conseils' }]}
      />
      <section className={styles.pageContent}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-header">
            <h2>Nos derniers articles</h2>
            <p>Conseils et informations de nos orthésistes pour votre bien-être</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {articles.map((article, i) => (
              <article key={i} id={article.id} className="card" style={{ padding: 32 }}>
                <span style={{ display: 'inline-block', padding: '4px 14px', background: 'var(--blue-light)', color: 'var(--blue-primary)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 12 }}>
                  {article.category}
                </span>
                <h3 style={{ marginBottom: 8, fontSize: '1.3rem' }}>{article.title}</h3>
                <p style={{ marginBottom: 16 }}>{article.excerpt}</p>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Article complet à venir</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
