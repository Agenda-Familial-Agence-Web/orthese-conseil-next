'use client';

import type { Testimonial } from '@/data/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 24px',
        minWidth: 320,
        maxWidth: 380,
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--gray-100)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'transform var(--transition-base)',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', gap: 3 }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#f59e0b"
            style={{
              animation: `starPop 0.3s ease ${i * 0.08}s both`,
            }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flexGrow: 1,
        }}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
          {testimonial.name}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-accent)" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Avis Google vérifié
        </span>
      </div>
    </div>
  );
}
