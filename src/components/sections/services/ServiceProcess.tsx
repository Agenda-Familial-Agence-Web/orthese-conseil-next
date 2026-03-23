"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="section-padding">
      <SectionHeading
        badge="Étapes"
        title="Le processus"
        subtitle="Un accompagnement structuré pour des résultats optimaux."
      />

      <div className="mt-16 max-w-2xl mx-auto">
        <Timeline items={steps} />
      </div>
    </section>
  );
}
