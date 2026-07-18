import { Hero } from "@/components/home/Hero";
import { PartnersTrust } from "@/components/home/PartnersTrust";
import { ProtectionManifesto } from "@/components/home/ProtectionManifesto";
import { Services } from "@/components/home/Services";
import { AirbnbTurnover } from "@/components/home/AirbnbTurnover";
import { TrustAtria } from "@/components/home/TrustAtria";
import { Process } from "@/components/home/Process";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Faq } from "@/components/home/Faq";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSchema } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <FaqSchema />
      <Hero />
      <PartnersTrust />
      <ProtectionManifesto />
      <Services />
      <AirbnbTurnover />
      <TrustAtria />
      <Process />
      <About />
      <Stats />
      <Testimonials />
      <Pricing />
      <ServiceArea />
      <Faq />
      <ContactSection />
    </>
  );
}
