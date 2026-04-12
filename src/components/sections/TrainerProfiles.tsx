import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton } from '@/components/ui';

export function TrainerProfiles() {
  const data = copyData.websiteData.sections.trainerProfiles;

  // SEO Asset Mapping explicitly detailed in Sub-Task 5.4
  const trainerImages = [
    "/assets/aura-wellness-trainer-karthik-profile.webp",
    "/assets/aura-wellness-trainer-priya-profile.webp",
    "/assets/aura-wellness-trainer-dinesh-profile.webp"
  ];
  
  const trainerAlts = [
    "Karthik, expert personal trainer at Aura Wellness Chennai",
    "Priya, certified female personal trainer at Aura Wellness Anna Nagar",
    "Dinesh, elite fitness and recovery coach in Chennai"
  ];

  return (
    <section className="w-full py-16 px-6 lg:py-24 bg-surface-base">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow={data.eyebrowLabel}
          heading={data.headline}
          subtitle={data.subHeadline}
          align="center"
        />

        {/* 3-Column Card Grid mapping strictly to _HANDOFF.md */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
          {data.trainers.map((trainer, index) => (
            <StandardCard key={trainer.id} className="flex flex-col h-full !p-0 overflow-hidden group">
               <div className="p-6 md:p-8 flex flex-col flex-grow">
                 <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 mb-6 border border-gray-200/50">
                   <Image 
                     src={trainerImages[index]}
                     alt={trainerAlts[index]}
                     fill
                     className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                     sizes="(max-width: 1024px) 100vw, 33vw"
                   />
                 </div>
                 <h3 className="text-2xl font-extrabold text-text-heading mb-2">
                   {trainer.name}
                 </h3>
                 <p className="text-xs font-extrabold text-brand-primary uppercase tracking-widest mb-3 border-b border-gray-200 pb-3">
                   {trainer.certificationLine}
                 </p>
                 <div className="mb-4">
                   <span className="text-xs font-bold text-text-body bg-gray-100 px-3 py-1.5 rounded-md inline-block">
                     {trainer.specialisationTag}
                   </span>
                 </div>
                 <p className="text-text-body font-medium italic leading-relaxed flex-grow">
                   "{trainer.personalQuote}"
                 </p>
               </div>
               
               <div className="p-6 pt-0 mt-auto">
                 <WhatsAppButton 
                   href={`https://wa.me/?text=${encodeURIComponent(trainer.ctaButton.preFilledWhatsAppMessage)}`}
                   className="w-full text-sm py-3.5"
                 >
                   {trainer.ctaButton.label}
                 </WhatsAppButton>
               </div>
            </StandardCard>
          ))}
        </div>

        {/* Dedicated Female-First Callout Block */}
        <div className="w-full rounded-2xl overflow-hidden bg-accent-femaleFirst shadow-card-base flex flex-col-reverse lg:flex-row items-stretch mb-24 border border-accent-guarantee/40">
          <div className="w-full lg:w-1/2 p-8 lg:p-14 xl:p-20 flex flex-col items-start justify-center text-left">
            <span className="text-accent-saffron font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              {data.femaleFirstCalloutBlock.eyebrowLabel}
            </span>
            <h3 className="text-text-heading text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              {data.femaleFirstCalloutBlock.headline}
            </h3>
            <p className="text-text-body text-lg mb-8 leading-relaxed">
              {data.femaleFirstCalloutBlock.body}
            </p>
            
            <WhatsAppButton 
              href={`https://wa.me/?text=${encodeURIComponent(data.femaleFirstCalloutBlock.ctaButton.preFilledWhatsAppMessage)}`}
              className="w-full sm:w-auto"
            >
              {data.femaleFirstCalloutBlock.ctaButton.optionA}
            </WhatsAppButton>
            <p className="text-xs font-semibold text-text-body mt-3 opacity-80">
              {data.femaleFirstCalloutBlock.ctaButton.belowButtonMicroLine}
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex-shrink-0">
            <Image 
              src="/assets/aura-wellness-female-personal-training.webp"
              alt="Female personal trainer guiding a workout session in our safe gym environment"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Philosophy Strip: bg-brand-dark text-white. No hover interactions. */}
        <div className="w-full rounded-2xl bg-brand-dark text-white py-16 px-6 md:py-24 md:px-16 text-center flex flex-col items-center justify-center mb-24 lg:shadow-card-base">
           <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-brand-primary opacity-50 mb-8">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
           </svg>
           <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug mb-8 max-w-4xl tracking-wide drop-shadow-md">
             "{data.philosophyStrip.displayQuote}"
           </h3>
           <p className="text-brand-primary font-bold tracking-widest text-sm uppercase opacity-90">
             {data.philosophyStrip.attribution}
           </p>
        </div>

        {/* Closing Action Banner */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <h3 className="text-text-heading text-2xl md:text-3xl font-extrabold mb-8 leading-snug">
            {data.closingCta.closingLine}
          </h3>
          <WhatsAppButton 
            href={`https://wa.me/?text=${encodeURIComponent(data.closingCta.ctaButton.preFilledWhatsAppMessage)}`}
            className="w-full sm:w-auto px-10"
          >
            {data.closingCta.ctaButton.label}
          </WhatsAppButton>
          <p className="text-xs md:text-sm font-semibold text-text-body mt-4 opacity-80">
            {data.closingCta.ctaButton.belowButtonMicroLine}
          </p>
        </div>

      </div>
    </section>
  );
}

export default TrainerProfiles;
