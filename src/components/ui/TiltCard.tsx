"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    rotateY.set(deltaX * tiltAmount);
    rotateX.set(-deltaY * tiltAmount);

    shineX.set(((e.clientX - rect.left) / rect.width) * 100);
    shineY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    shineX.set(50);
    shineY.set(50);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        className={`relative overflow-hidden ${className}`}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {/* Shine overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${shineX.get()}% ${shineY.get()}%, rgba(255,255,255,0.2) 0%, transparent 60%)`
              : "none",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </motion.div>
    </div>
  );
}
