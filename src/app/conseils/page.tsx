import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';

export const metadata: Metadata = {
  title: 'Conseils',
  description: 'Conseils et articles sur la santé orthopédique par Orthèse Conseil. Informations sur les orthèses, la posture et le bien-être.',
};

const articles = [
  {
    id: 'marche-enfant',
    category: 'Pédiatrie',
    title: 'Le développement de la marche chez l\'enfant',
    excerpt: 'Découvrez les étapes normales du développement de la marche chez l\'enfant et quand consulter un orthésiste si vous observez des anomalies.',
  },
  {
    id: 'sante-aines',
    category: 'Aînés',
    title: 'Nous avons à cœur la santé de nos aînés',
    excerpt: 'Les orthèses et appareils orthopédiques jouent un rôle essentiel dans le maintien de la mobilité et de l\'autonomie des personnes âgées.',
  },
];

export default function ConseilsPage() {
  return (
    <>
      <HeroBanner
        title="Conseils"
        breadcrumbs={[{ label: 'Conseils' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Articles et conseils</h2>
            <p>Des informations utiles pour votre santé orthopédique.</p>
          </div>

          <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto' }}>
            {articles.map((article) => (
              <div
                key={article.id}
                id={article.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'var(--blue-light)',
                  color: 'var(--blue-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  alignSelf: 'flex-start',
                }}>
                  {article.category}
                </span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Article complet à venir
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ color: 'var(--text-muted)' }}>Plus d&apos;articles à venir prochainement.</p>
          </div>
        </div>
      </section>
    </>
  );
}
