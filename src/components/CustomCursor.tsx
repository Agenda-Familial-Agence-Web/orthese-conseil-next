'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [onGreen, setOnGreen] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    const hoverEnter = () => setIsHovering(true);
    const hoverLeave = () => setIsHovering(false);
    const greenEnter = () => setOnGreen(true);
    const greenLeave = () => setOnGreen(false);

    const trackedElements = new WeakSet<Element>();

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"], .card, .btn').forEach((el) => {
        if (trackedElements.has(el)) return;
        trackedElements.add(el);
        el.addEventListener('mouseenter', hoverEnter);
        el.addEventListener('mouseleave', hoverLeave);
      });
      document.querySelectorAll('.btn-green').forEach((el) => {
        if (trackedElements.has(el)) return;
        trackedElements.add(el);
        el.addEventListener('mouseenter', greenEnter);
        el.addEventListener('mouseleave', greenLeave);
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: x,
          top: y,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: onGreen ? 'var(--blue-primary)' : 'var(--green-accent)',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          opacity: isHidden ? 0 : 1,
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: x,
          top: y,
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          opacity: isHidden ? 0 : 0.5,
        }}
        animate={{
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          borderWidth: isHovering ? 2 : 1.5,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: onGreen ? '1.5px solid var(--blue-primary)' : '1.5px solid var(--green-accent)',
            opacity: 0.6,
          }}
        />
      </motion.div>
    </>
  );
}
