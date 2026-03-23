'use client';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
}

export default function InfiniteMarquee({ children, speed = 40, reverse = false }: InfiniteMarqueeProps) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          gap: 24,
          width: 'max-content',
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
