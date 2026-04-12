import React from 'react';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton, SecondaryLink } from '@/components/ui';

const ChatSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const DoorSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></path><rect x="5" y="3" width="14" height="18"></rect><path d="M14 12v.01"></path>
  </svg>
);

const CheckmarkSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ArrowRightSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ArrowDownSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
    <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

export function HowItWorks() {
  const data = copyData.websiteData.sections.howItWorks;
  const icons = [ChatSVG, DoorSVG, CheckmarkSVG];

  return (
    <section className="w-full py-16 px-6 lg:py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow={data.eyebrowLabel}
          heading={data.headline}
          subtitle={data.subHeadline}
          align="center"
        />

        {/* 3-Column Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative w-full mb-16">
          {data.steps.map((step, index) => {
            const Icon = icons[index] || ChatSVG;
            return (
              <div key={step.id} className="relative z-10 flex flex-col">
                <StandardCard className="h-full flex flex-col items-center text-center !p-8 bg-surface-base shadow-none border border-gray-100 hover:shadow-card-base transition-all group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-card-base text-brand-primary mb-6 ring-4 ring-brand-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>
                  <span className="text-accent-saffron font-bold text-xs uppercase tracking-widest mb-3">
                    {step.stepNumberLabel}
                  </span>
                  <h3 className="text-text-heading text-xl md:text-2xl font-extrabold mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-text-body text-base leading-relaxed mb-6">
                    {step.body}
                  </p>
                  
                  {/* Micro Detail with border isolation */}
                  <p className="text-sm font-semibold text-text-body opacity-80 mt-auto flex-grow italic border-t border-gray-200/60 pt-4 w-full">
                    {step.microDetail}
                  </p>

                  {/* Step-specific inline CTA handling */}
                  {step.ctaButton?.optionA && (
                    <SecondaryLink 
                      href={`https://wa.me/?text=${encodeURIComponent(step.ctaButton.preFilledWhatsAppMessage || '')}`} 
                      className="mt-6 flex justify-center w-full"
                    >
                      {step.ctaButton.optionA}
                    </SecondaryLink>
                  )}
                </StandardCard>

                {/* Sub-Task 5.3 strictly maps connecting lines on Desktop and Arrows vertically on mobile */}
                {index < data.steps.length - 1 && (
                  <>
                    <div className="hidden lg:flex absolute top-[20%] -right-[32px] w-[50px] items-center justify-center z-0">
                      <ArrowRightSVG />
                    </div>
                    <div className="flex lg:hidden absolute -bottom-[32px] left-1/2 -translate-x-1/2 items-center justify-center z-0">
                      <ArrowDownSVG />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Sub-Task 5.3: Reassurance Strip ( bg-accent-guarantee ) flex-col -> md:flex-row */}
        <div className="w-full bg-accent-guarantee rounded-2xl py-8 px-6 mb-16 shadow-inner tracking-wide">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300/60">
            {data.reassuranceStrip.phrases.map((phrase, idx) => (
              <div key={idx} className="w-full md:w-1/3 pt-4 md:pt-0 px-4 first:pt-0">
                <p className="font-extrabold text-text-heading text-sm md:text-base tracking-wide">
                  {phrase.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Core WhatsApp Conversion Target */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <h3 className="text-text-heading text-2xl md:text-3xl font-extrabold mb-8 loading-tight">
            {data.closingCta.closingLine}
          </h3>
          <WhatsAppButton 
            href={`https://wa.me/?text=${encodeURIComponent(data.closingCta.ctaButton.preFilledWhatsAppMessage)}`}
            className="w-full sm:w-auto px-10"
          >
            {data.closingCta.ctaButton.label}
          </WhatsAppButton>
          <p className="text-sm font-semibold text-text-body mt-4 opacity-80">
            {data.closingCta.ctaButton.belowButtonMicroLine}
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
