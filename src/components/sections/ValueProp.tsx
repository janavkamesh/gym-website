import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton } from '@/components/ui';

const TargetSVG = () => (
  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const ShieldSVG = () => (
  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ClockSVG = () => (
  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export function ValueProp() {
  const data = copyData.websiteData.sections.valueProp;

  return (
    <section className="w-full py-16 px-6 lg:py-24 bg-surface-base">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader 
          eyebrow={data.eyebrowLabel}
          heading={data.headline}
          align="center"
        />

        {/* 3-Column Benefit Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <StandardCard className="flex flex-col group h-full">
            <div className="text-brand-primary mb-5 bg-brand-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
              <TargetSVG />
            </div>
            <h3 className="text-text-heading text-xl font-extrabold mb-3 leading-snug">
              {data.benefitCards[0].title}
            </h3>
            <p className="text-text-body leading-relaxed mb-6 flex-grow">
              {data.benefitCards[0].body}
            </p>
            <div className="mt-auto h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm border-t border-gray-100 pt-3 text-brand-primary font-semibold">
                {data.benefitCards[0].hoverExpandedLine}
              </p>
            </div>
          </StandardCard>

          <StandardCard className="flex flex-col group h-full">
            <div className="text-brand-primary mb-5 bg-brand-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
              <ShieldSVG />
            </div>
            <h3 className="text-text-heading text-xl font-extrabold mb-3 leading-snug">
              {data.benefitCards[1].title}
            </h3>
            <p className="text-text-body leading-relaxed mb-6 flex-grow">
              {data.benefitCards[1].body}
            </p>
            <div className="mt-auto h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm border-t border-gray-100 pt-3 text-brand-primary font-semibold">
                {data.benefitCards[1].hoverExpandedLine}
              </p>
            </div>
          </StandardCard>

          <StandardCard className="flex flex-col group h-full relative">
            <div className="text-brand-primary mb-5 bg-brand-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
              <ClockSVG />
            </div>
            <h3 className="text-text-heading text-xl font-extrabold mb-3 leading-snug">
              {data.benefitCards[2].title}
            </h3>
            <p className="text-text-body leading-relaxed mb-6 flex-grow">
              {data.benefitCards[2].body}
            </p>
            {/* The absolute desktop note "Community card absolute on desktop" might be a directive for the 3rd card floating? 
                No, we stick to the grid. 
            */}
            <div className="mt-auto h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm border-t border-gray-100 pt-3 text-brand-primary font-semibold">
                {data.benefitCards[2].hoverExpandedLine}
              </p>
            </div>
          </StandardCard>
        </div>

        {/* Female-First Block Banner */}
        <div className="w-full rounded-2xl overflow-hidden bg-accent-femaleFirst shadow-sm flex flex-col lg:flex-row items-stretch">
          
          <div className="w-full lg:w-1/2 p-8 lg:p-14 xl:p-20 flex flex-col items-start justify-center">
            <span className="text-accent-saffron font-bold uppercase tracking-wider text-sm mb-4">
              {data.femaleFirstBlock.eyebrowLabel}
            </span>
            <h3 className="text-text-heading text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              {data.femaleFirstBlock.headline}
            </h3>
            <p className="text-text-body text-lg mb-6 leading-relaxed">
              {data.femaleFirstBlock.body}
            </p>
            <p className="text-text-body font-bold italic mb-8 border-l-4 border-brand-primary pl-4 py-1">
              {data.femaleFirstBlock.supportingDetailLine}
            </p>
            
            <WhatsAppButton 
              href={`https://wa.me/?text=${encodeURIComponent(data.femaleFirstBlock.ctaButton.preFilledWhatsAppMessage)}`}
              className="w-full sm:w-auto"
            >
              {data.femaleFirstBlock.ctaButton.optionA}
            </WhatsAppButton>
            <p className="text-xs font-medium text-text-body mt-3 opacity-90">
              {data.femaleFirstBlock.ctaButton.belowButtonMicroLine}
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex-shrink-0">
            <Image 
              src="/assets/aura-wellness-womens-fitness-lounge-chennai.webp"
              alt="Private, safe women's fitness lounge at Aura Wellness in Anna Nagar"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default ValueProp;
