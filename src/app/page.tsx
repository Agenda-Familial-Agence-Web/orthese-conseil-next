import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import About from "@/components/sections/home/About";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Testimonials from "@/components/sections/home/Testimonials";
import Insurance from "@/components/sections/home/Insurance";
import FAQ from "@/components/sections/home/FAQ";
import ContactCTA from "@/components/sections/home/ContactCTA";
import MapSection from "@/components/sections/home/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Insurance />
      <FAQ />
      <ContactCTA />
      <MapSection />
    </>
  );
}
