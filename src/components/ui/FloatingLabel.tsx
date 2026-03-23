'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingLabelProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  textarea?: boolean;
  required?: boolean;
}

export default function FloatingLabel({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  textarea = false,
  required = false,
}: FloatingLabelProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '20px 16px 8px',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'var(--text-primary)',
    background: 'var(--white)',
    border: 'none',
    borderBottom: `2px solid ${error ? '#ef4444' : focused ? 'var(--blue-primary)' : 'var(--gray-100)'}`,
    outline: 'none',
    transition: 'border-color var(--transition-fast)',
    borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
    resize: textarea ? 'vertical' as const : 'none' as const,
  };

  return (
    <div style={{ position: 'relative' }}>
      <motion.label
        htmlFor={name}
        animate={{
          top: isActive ? 6 : 16,
          fontSize: isActive ? '0.75rem' : '1rem',
          color: error ? '#ef4444' : isActive ? 'var(--blue-primary)' : 'var(--text-muted)',
        }}
        transition={{ duration: 0.15 }}
        style={{
          position: 'absolute',
          left: 16,
          pointerEvents: 'none',
          fontFamily: 'var(--font-body)',
          zIndex: 1,
        }}
      >
        {label}{required && ' *'}
      </motion.label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          style={inputStyles}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyles}
          aria-invalid={!!error}
        />
      )}
      {isActive && value.length > 0 && !error && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-accent)" strokeWidth="2.5" style={{ position: 'absolute', right: 12, top: 16 }}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )}
      {error && (
        <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: 4, display: 'block' }}>{error}</span>
      )}
    </div>
  );
}
