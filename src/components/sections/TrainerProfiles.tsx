import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';

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
    <section id="trainers" className="w-full py-16 px-6 lg:py-24 bg-surface-base">
      <div className="max-w-7xl mx-auto">
        <Animate variant="fadeUp" duration={700}>
          <SectionHeader 
            eyebrow={data.eyebrowLabel}
            heading={data.headline}
            align="center"
          />
        </Animate>

        {/* 3-Column Card Grid mapping strictly to _HANDOFF.md */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
          {data.trainers.map((trainer, index) => (
            <Animate key={trainer.id} variant="fadeUp" delay={index * 150} duration={650}>
              <StandardCard className="flex flex-col h-full !p-0 overflow-hidden group">
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
                     {trainer.name.split(' ')[0]}
                   </h3>
                   <p className="text-xs font-extrabold text-brand-primary uppercase tracking-widest mb-3 border-b border-gray-200 pb-3">
                     {trainer.certificationLine}
                   </p>
                   <div className="mb-0 flex-grow">
                     <span className="text-xs font-bold text-gray-900 bg-gray-100 px-3 py-1.5 rounded-md inline-block">
                       {trainer.specialisationTag}
                     </span>
                   </div>
                 </div>
                 
                 <div className="p-6 pt-0 mt-auto">
                   <WhatsAppButton 
                     href={`https://wa.me/919876543210?text=${encodeURIComponent(trainer.ctaButton.preFilledWhatsAppMessage)}`}
                     className="w-full text-sm py-3.5"
                   >
                     {trainer.ctaButton.label}
                   </WhatsAppButton>
                 </div>
              </StandardCard>
            </Animate>
          ))}
        </div>

        {/* Dedicated Female-First Callout Block */}
        <div className="w-full rounded-2xl overflow-hidden bg-surface-card shadow-card-base flex flex-col-reverse lg:flex-row items-stretch mb-0 border border-white/5">
          <Animate variant="slideRight" duration={750} className="w-full lg:w-1/2 p-8 lg:p-14 xl:p-20 flex flex-col items-start justify-center text-left">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              {data.femaleFirstCalloutBlock.eyebrowLabel}
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-5 leading-tight">
              {data.femaleFirstCalloutBlock.headline}
            </h3>
            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              {data.femaleFirstCalloutBlock.body}
            </p>
            
            <WhatsAppButton 
              href={`https://wa.me/919876543210?text=${encodeURIComponent(data.femaleFirstCalloutBlock.ctaButton.preFilledWhatsAppMessage)}`}
              className="w-full sm:w-auto"
            >
              {data.femaleFirstCalloutBlock.ctaButton.optionA}
            </WhatsAppButton>
            <p className="text-xs font-semibold text-gray-400 mt-3 opacity-80">
              {data.femaleFirstCalloutBlock.ctaButton.belowButtonMicroLine}
            </p>
          </Animate>

          <Animate variant="slideLeft" duration={750} className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex-shrink-0">
            <Image 
              src="/assets/aura-wellness-female-personal-training.webp"
              alt="Female personal trainer guiding a workout session in our safe gym environment"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Animate>
        </div>



      </div>
    </section>
  );
}

export default TrainerProfiles;
