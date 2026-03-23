import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import { services } from '@/data/services';
import styles from '@/styles/inner.module.css';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <HeroBanner
        title={service.name}
        breadcrumbs={[
          { label: 'Nos services', href: '/nos-services' },
          { label: service.name },
        ]}
      />

      {/* ---- Intro ---- */}
      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <span className={styles.sectionLabel}>{service.name}</span>
              <h2>{service.seo.title.split('—')[0].trim()}</h2>
              <p>{service.fullDescription}</p>
              <Link href="/prendre-rendez-vous" className="btn btn-green" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                Prendre rendez-vous
              </Link>
            </div>
            <Image
              src={service.heroImage}
              alt={service.name}
              width={500}
              height={400}
              className={styles.contentImage}
            />
          </div>
        </div>
      </section>

      {/* ---- Features ---- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Caractéristiques</h2>
          </div>
          <div className="grid-2">
            {service.features.map((f, i) => (
              <div key={i} className="card">
                <h4>{f.title}</h4>
                <p style={{ marginTop: 8 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Process ---- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Le processus</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {service.process.map((p) => (
              <div key={p.step} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--blue-primary), var(--green-accent))',
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem',
                }}>
                  {p.step}
                </div>
                <div>
                  <h4>{p.title}</h4>
                  <p style={{ marginTop: 4 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Coverage ---- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Couverture</h2>
            <p>Ce service est couvert par les programmes et assurances suivants.</p>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {service.coverage.map((c) => (
              <span key={c} style={{
                padding: '12px 28px', background: 'var(--white)', borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--blue-primary)',
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-100)',
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Other Services ---- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nos autres services</h2>
          </div>
          <div className="grid-4">
            {otherServices.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/nos-services/${s.slug}`}
                className="card"
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                <h4 style={{ marginBottom: 8 }}>{s.name}</h4>
                <p style={{ fontSize: '0.9rem' }}>{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
