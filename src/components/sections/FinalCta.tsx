import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';

export function FinalCta() {
  const data = copyData.websiteData.sections.finalCta;

  // Strict SEO matching to _HANDOFF assets
  const interiorImages = [
    "/assets/main_training_floor.png",
    "/assets/womens_section_gym.png",
    "/assets/aura-wellness-personal-training-session.webp"
  ];

  return (
    <section className="w-full pt-16 pb-8 px-6 lg:pt-32 lg:pb-12 bg-white text-gray-900 border-t-2 border-brand-primary/10 relative overflow-hidden">
      
      {/* Background Accent Gradient for Final CTA Conversion Empathy */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 mb-20">
        
        <Animate variant="fadeUp" duration={700}>
          <SectionHeader 
            eyebrow={data.eyebrowLabel}
            heading={data.headline}
            subtitle={data.subHeadline}
            align="center"
          />
        </Animate>

        {/* Primary Action Button Logic isolated to highest visual hierarchy */}
        <Animate variant="fadeUp" delay={150} duration={700}>
          <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center">
            <p className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-brand-primary mb-5 bg-brand-primary/10 px-4 py-1.5 rounded-full">
              {data.primaryWhatsAppCta.preCTAMicroLine}
            </p>
            
            {/* Using custom global mapping explicitly matching 56px minimum height request */}
            <WhatsAppButton 
              href={`https://wa.me/919876543210?text=${encodeURIComponent(data.primaryWhatsAppCta.ctaButton.preFilledWhatsAppMessage)}`}
              className="w-full md:w-auto min-h-[64px] px-14 text-base mb-6 shadow-cta-heavy ring-4 ring-brand-primary/20 transition-all hover:scale-[1.02]"
            >
              {data.primaryWhatsAppCta.ctaButton.optionA}
            </WhatsAppButton>
            
            <p className="text-sm font-bold text-gray-900 mb-2 max-w-sm">
              {data.primaryWhatsAppCta.ctaButton.belowButtonPrimaryMicroLine}
            </p>
            <p className="text-xs font-semibold text-gray-700 opacity-80 mb-8 max-w-md">
              {data.primaryWhatsAppCta.ctaButton.belowButtonSecondaryMicroLine}
            </p>
            
            <a 
              href="tel:+919876543210" 
              className="text-brand-primary font-bold text-sm lg:text-base tracking-wide hover:underline hover:text-brand-hover inline-flex items-center gap-2.5 mt-2 transition-colors border border-brand-primary/20 px-6 py-2.5 rounded-full bg-white shadow-sm"
              aria-label={data.secondaryCta.ariaLabel}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {data.secondaryCta.label}
            </a>
          </div>
        </Animate>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        

        {/* Interior Photos Strip exactly mapped layout cols-1 -> md:cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-0">
          {data.gymInteriorPhotoStrip.photos.map((photo, i) => (
            <Animate key={photo.id} variant="fadeUp" delay={i * 120} duration={650}>
              <div className="flex flex-col relative w-full group text-center md:text-left">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-5 border border-gray-200/50 shadow-sm">
                  <Image 
                    src={interiorImages[i]}
                    alt={photo.altText}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="font-extrabold text-sm text-gray-900 mb-1.5 uppercase tracking-wide">
                  {photo.subject}
                </p>
                <p className="text-xs lg:text-sm font-semibold text-gray-700 opacity-80 lg:max-w-xs">
                  {photo.caption}
                </p>
              </div>
            </Animate>
          ))}
        </div>


      </div>

    </section>
  );
}

export default FinalCta;
