import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SecuritySection from '@/components/sections/SecuritySection';
import CCTVSection from '@/components/sections/CCTVSection';
import CommercialSection from '@/components/sections/CommercialSection';
import FacilitySection from '@/components/sections/FacilitySection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WhyKalycor from '@/components/sections/WhyKalycor';
import ProcessSection from '@/components/sections/ProcessSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <SecuritySection />
      <CCTVSection />
      <CommercialSection />
      <FacilitySection />
      <IndustriesSection />
      <WhyKalycor />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
