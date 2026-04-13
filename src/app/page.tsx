import HeroSection from '@/components/sections/HeroSection';
import TrustSignals from '@/components/sections/TrustSignals';
import ValueProp from '@/components/sections/ValueProp';
import HowItWorks from '@/components/sections/HowItWorks';
import TrainerProfiles from '@/components/sections/TrainerProfiles';
import SocialProof from '@/components/sections/SocialProof';
import PricingTable from '@/components/sections/PricingTable';
import AboutUs from '@/components/sections/AboutUs';
import FaqSection from '@/components/sections/FaqSection';
import FinalCta from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSignals />
      <ValueProp />
      <HowItWorks />
      <TrainerProfiles />
      <SocialProof />
      <PricingTable />
      <AboutUs />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
