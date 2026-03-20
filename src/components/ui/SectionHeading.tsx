"use client";

import TextReveal from "./TextReveal";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <ScrollReveal direction="up" delay={0}>
          <span
            className={`inline-block font-mono text-xs uppercase tracking-widest mb-4 ${
              dark ? "text-accent-light" : "text-accent"
            }`}
          >
            {badge}
          </span>
        </ScrollReveal>
      )}

      <TextReveal
        variant="word"
        tag="h2"
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
          dark ? "text-white" : "text-text-primary"
        } ${isCenter ? "mx-auto" : ""}`}
        delay={badge ? 0.1 : 0}
      >
        {title}
      </TextReveal>

      {subtitle && (
        <ScrollReveal direction="up" delay={0.3}>
          <p
            className={`mt-6 text-lg md:text-xl max-w-2xl leading-relaxed ${
              dark ? "text-gray-400" : "text-text-secondary"
            } ${isCenter ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
