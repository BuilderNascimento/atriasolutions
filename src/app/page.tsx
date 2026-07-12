import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { AirbnbTurnover } from "@/components/home/AirbnbTurnover";
import { TrustAtria } from "@/components/home/TrustAtria";
import { Process } from "@/components/home/Process";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Faq } from "@/components/home/Faq";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSchema } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <FaqSchema />
      <Hero />
      <Services />
      <AirbnbTurnover />
      <TrustAtria />
      <Process />
      <About />
      <Stats />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <ContactSection />
    </>
  );
}
