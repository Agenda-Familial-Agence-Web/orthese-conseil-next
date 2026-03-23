"use client";

import { useRef } from "react";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const animationStyle = {
    animationDuration: `${speed}s`,
    animationDirection: direction === "right" ? "reverse" as const : "normal" as const,
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
    >
      <div
        className={`flex whitespace-nowrap animate-marquee ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={animationStyle}
      >
        <div className="flex gap-6 shrink-0 pr-6">
          {children}
        </div>
        <div className="flex gap-6 shrink-0 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
