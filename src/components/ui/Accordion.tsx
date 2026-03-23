'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 800, margin: '0 auto' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${openIndex === i ? 'rgba(30, 115, 190, 0.2)' : 'var(--gray-100)'}`,
            overflow: 'hidden',
            transition: 'border-color var(--transition-base)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: openIndex === i ? 'var(--blue-primary)' : 'var(--text-primary)',
              textAlign: 'left',
              transition: 'color var(--transition-fast)',
            }}
          >
            {item.question}
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0, marginLeft: 16 }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
