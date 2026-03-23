"use client";

import ScrollReveal from "./ScrollReveal";

interface TimelineItem {
  step: number;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8 md:pl-12">
      {/* Vertical line */}
      <div className="absolute left-[5px] md:left-[5px] top-0 bottom-0 w-[2px] bg-primary/20">
        <div className="w-full h-full bg-primary origin-top animate-[grow-line_1.5s_ease-out_forwards]" />
      </div>

      <div className="space-y-10">
        {items.map((item, i) => (
          <ScrollReveal key={item.step} direction="up" delay={i * 0.15}>
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-8 md:-left-12 top-1 w-3 h-3 rounded-full bg-primary border-4 border-white shadow-sm" />

              {/* Content */}
              <div>
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-1">
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary mt-1 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
