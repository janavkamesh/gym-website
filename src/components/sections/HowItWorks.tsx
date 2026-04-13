import React from 'react';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, WhatsAppButton, Animate } from '@/components/ui';

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
    <section id="how-it-works" className="w-full py-16 px-6 lg:py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <Animate variant="fadeUp" duration={700}>
          <SectionHeader 
            eyebrow={data.eyebrowLabel}
            heading={data.headline}
            align="center"
          />
        </Animate>

        {/* 3-Column Timeline with mb-8 mobile vertical spacing isolation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative w-full mb-16">
          {data.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Animate key={step.id} variant="fadeUp" delay={index * 150} duration={650} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mb-0 mx-auto">
                    <Icon />
                  </div>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow">
                    {step.stepNumberLabel}
                  </span>
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-extrabold leading-snug whitespace-pre-line text-center mt-4">
                  {step.title}
                </h3>
              </Animate>
            );
          })}
        </div>

        {/* Reassurance Strip */}
        <div className="w-full bg-black/5 rounded-2xl py-8 px-6 mb-16 border border-black/10 tracking-wide">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {data.reassuranceStrip.phrases.map((phrase, idx) => (
              <div key={idx} className="w-full md:w-1/3 pt-4 md:pt-0 px-4 first:pt-0">
                <p className="font-extrabold text-brand-primary text-sm md:text-base tracking-wide">
                  {phrase.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Core WhatsApp Conversion Target */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <h3 className="text-gray-900 text-xl md:text-2xl font-extrabold mb-8 leading-tight">
            {data.closingCta.closingLine}
          </h3>
          <WhatsAppButton 
            href={`https://wa.me/919876543210?text=${encodeURIComponent(data.closingCta.ctaButton.preFilledWhatsAppMessage)}`}
            className="w-full sm:w-auto px-10"
          >
            {data.closingCta.ctaButton.label}
          </WhatsAppButton>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
