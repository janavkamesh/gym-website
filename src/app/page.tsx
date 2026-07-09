import HeroSection from '@/components/sections/HeroSection';
import ValueProp from '@/components/sections/ValueProp';
import Gallery from '@/components/sections/Gallery';
import MeetOwner from '@/components/sections/MeetOwner';
import TrainerProfiles from '@/components/sections/TrainerProfiles';
import SocialProof from '@/components/sections/SocialProof';
import PricingTable from '@/components/sections/PricingTable';

import FaqSection from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Sticky Hero Section */}
      <div className="sticky top-0 h-[90vh] md:h-[100vh] w-full z-0 flex flex-col items-start justify-start bg-black">
        <HeroSection />
      </div>

      {/* Scrollable Content overlapping the Hero */}
      <div className="relative z-10 bg-[#0B0C10] w-full shadow-top-glow border-t border-[#E63946]/10">
        <ValueProp />
        <Gallery />
        <MeetOwner />
        <TrainerProfiles />
        <SocialProof />
        <PricingTable />
        <FaqSection />
      </div>
    </main>
  );
}
