import React from 'react';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton, SecondaryLink, Animate } from '@/components/ui';

const CheckSVG = () => (
   <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12"></polyline>
   </svg>
);

const ShieldSVG = () => (
   <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
   </svg>
);

const ClockSVG = () => (
   <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
   </svg>
);

export function PricingTable() {
  const data = copyData.websiteData.sections.pricingTable;
  const globalGuarantee = data.guaranteeBadgeGlobal;

  return (
    <section id="pricing" className="w-full py-16 px-6 lg:py-24 bg-surface-card border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto">
        <Animate variant="fadeUp" duration={700}>
          <SectionHeader 
            eyebrow={data.eyebrowLabel}
            heading={data.headline}
            align="center"
          />
        </Animate>

        {/* Pricing Cards Grid: cols-1 → md:cols-2 → lg:cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:pt-6">
          {data.pricingCards.map((card, index) => {
            const isPremium = card.planName === 'Premium';
            
            return (
              <Animate key={card.id} variant="fadeUp" delay={index * 150} duration={650}>
                <StandardCard 
                  isPremium={isPremium} 
                  className={`flex flex-col h-full relative border border-gray-200/50 ${isPremium ? 'lg:scale-105 z-10 shadow-card-hover' : 'z-0 lg:scale-100 shadow-sm'}`}
                >
                  {/* Most Popular Badge mapping logic */}
                  {isPremium && card.mostPopularBadge && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-extrabold uppercase tracking-widest py-1.5 px-4 rounded-full w-max text-center shadow-sm">
                      {card.mostPopularBadge}
                    </div>
                  )}
                  
                  {/* Component Head */}
                  <div className="text-center mb-6 pt-4 border-b border-gray-100 pb-8">
                    <h3 className="text-xl mt-2 font-extrabold text-text-heading mb-3">
                      {card.planName}
                    </h3>
                    <p className="text-sm text-text-body font-medium italic mb-6 min-h-[40px] px-2">
                      {card.planDescriptor}
                    </p>

                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 bg-brand-primary/10 px-3 py-1 rounded-full">
                        {card.pricing.dailyAnchor}
                      </span>
                      <div className="text-text-heading font-extrabold text-4xl mt-3 tracking-tighter">
                        {card.pricing.monthlyPrice.split('/')[0]}
                        <span className="text-lg text-text-body font-medium tracking-normal text-opacity-80">
                          /{card.pricing.monthlyPrice.split('/')[1] || ' month'}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-text-body mt-2">
                        {card.pricing.billingNote}
                      </p>
                      {card.pricing.annualOption && (
                        <p className="text-xs font-bold text-brand-primary mt-3 bg-brand-primary/10 px-2.5 py-1 rounded">
                          {card.pricing.annualOption}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Explicit Guarantee Placement mapping */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 mx-2 text-center mb-6 shadow-sm">
                    <p className="text-xs font-bold text-white tracking-wide">
                      {globalGuarantee.label}
                    </p>
                  </div>

                  {/* Features Mapping */}
                  <div className="flex-grow mb-8 px-2">
                    <ul className="space-y-4">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-sm text-text-body font-semibold">
                          <CheckSVG />
                          <span className="leading-snug pt-0.5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Block CTA */}
                  <div className="mt-auto px-2 pt-6 pb-2 border-t border-gray-100">
                    <WhatsAppButton 
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(card.ctaButton.preFilledWhatsAppMessage)}`}
                      className={`w-full py-4 shadow-sm text-sm ${!isPremium && 'bg-surface-base !text-white border-2 border-brand-primary hover:bg-brand-primary/5 shadow-none'}`}
                    >
                      {card.ctaButton.optionA}
                    </WhatsAppButton>
                    <p className="text-center text-xs text-text-body mt-4 font-bold opacity-80">
                      {card.ctaButton.belowButtonMicroLine}
                    </p>
                  </div>

                </StandardCard>
              </Animate>
            );
          })}
        </div>




        {/* Final Encapsulating Action Mapping */}
        <Animate variant="fadeUp" duration={700} delay={200}>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h3 className="text-text-heading text-xl md:text-2xl font-extrabold mb-8 leading-snug">
              {data.closingCta.closingLine}
            </h3>
            <WhatsAppButton 
              href={`https://wa.me/919876543210?text=${encodeURIComponent(data.closingCta.ctaButton.preFilledWhatsAppMessage)}`}
              className="w-full sm:w-auto px-10"
            >
              {data.closingCta.ctaButton.label}
            </WhatsAppButton>
            <p className="text-xs md:text-sm font-bold text-text-body mt-4 opacity-80">
              {data.closingCta.ctaButton.belowButtonMicroLine}
            </p>
          </div>
        </Animate>

      </div>
    </section>
  );
}

export default PricingTable;
