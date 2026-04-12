import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';

const heroData = copyData.websiteData.sections.heroSection;

export interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  primaryButtonLabel?: string;
  primaryButtonWaMessage?: string;
}

export function HeroSection({
  headline = heroData.headlineOptions.optionA,
  subHeadline = heroData.subHeadline,
  primaryButtonLabel = heroData.primaryButton.labelOptions.optionA,
  primaryButtonWaMessage = heroData.primaryButton.preFilledWhatsAppMessageTask3,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image Layer & Contrast Overhaul */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/assets/aura-wellness-chennai-premium-gym-floor.webp"
          alt="Wide view of the premium Aura Wellness gym floor in Chennai featuring modern equipment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        {/* Strict 50% dark overlay for guaranteed text legibility */}
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>

      {/* Hero Content container wrapped in explicit max-w and padding boundaries */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center py-20 lg:py-0">
        
        {/* Typography Scaling & Text Shadow Rendering */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] md:leading-[1.15] tracking-tight mb-6 max-w-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {headline}
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl drop-shadow-md leading-relaxed font-medium">
          {subHeadline}
        </p>

        {/* Solid Option A WhatsApp Block CTA */}
        <a 
          href={`https://wa.me/?text=${encodeURIComponent(primaryButtonWaMessage)}`}
          className="relative z-10 bg-[#25D366] text-white font-semibold text-base md:text-lg py-4 px-10 rounded shadow-cta-heavy hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center w-full sm:w-auto"
        >
          {primaryButtonLabel}
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
