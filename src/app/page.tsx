import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Testimonials from "@/components/sections/home/Testimonials";
import About from "@/components/sections/home/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
    </>
  );
}
