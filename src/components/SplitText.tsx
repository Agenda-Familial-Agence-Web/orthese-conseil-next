'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
}

export default function SplitText({
  children,
  className,
  as: Tag = 'h2',
  delay = 0,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const words = children.split(' ');

  return (
    <Tag ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
