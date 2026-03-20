"use client";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceIntro from "@/components/sections/services/ServiceIntro";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceCoverage from "@/components/sections/services/ServiceCoverage";
import OtherServices from "@/components/sections/services/OtherServices";
import { Service } from "@/data/services";

interface ServicePageClientProps {
  service: Service;
  otherServices: Service[];
}

export default function ServicePageClient({
  service,
  otherServices,
}: ServicePageClientProps) {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceIntro service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceProcess steps={service.process} />
      <ServiceCoverage
        coverage={service.coverage}
        serviceName={service.name}
      />
      <OtherServices services={otherServices} />
    </>
  );
}
