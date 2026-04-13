import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';

export function SocialProof() {
  const data = copyData.websiteData.sections.socialProof;

  // Strict SEO mappings from _HANDOFF.md
  const images = [
    "/assets/divya_transformation.png",
    "/assets/karthikeyan_muscle_gain.png",
    "/assets/meenakshi_weight_loss.png"
  ];
  const altTexts = [
    "Before and after fitness transformation of an Aura Wellness member",
    "90-day muscle gain and body transformation result from our Chennai gym",
    "Successful fitness and health transformation at Aura Wellness Anna Nagar"
  ];

  const primaryVideoCard = data.videoTestimonialCarousel.videoCards[0];

  return (
    <section id="results" className="w-full py-16 px-6 lg:py-24 bg-surface-base border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Envelope */}
        <Animate variant="fadeUp" duration={700}>
          <SectionHeader 
            eyebrow={data.eyebrowLabel}
            heading={data.headline}
            align="center"
          />
        </Animate>

        {/* Member Photo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {data.photoCards.map((card, index) => (
            <Animate key={card.id} variant="fadeUp" delay={index * 150} duration={650}>
              <StandardCard className="flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-extrabold text-text-heading mb-4">
                  {card.name.split(' ')[0]}
                </h3>
                <div className="relative w-full h-56 md:h-64 xl:h-72 rounded-lg overflow-hidden bg-gray-100 mb-6">
                  <Image 
                    src={images[index]}
                    alt={altTexts[index]}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <p className="font-bold text-lg text-text-heading mb-3 line-clamp-2">
                  {card.resultHeadline}
                </p>
                <p className="text-text-body text-base mb-6 flex-grow">
                  {card.contextLine}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                    {card.timeStamp}
                  </p>
                </div>
              </StandardCard>
            </Animate>
          ))}
        </div>

        <Animate variant="fadeUp" duration={750} delay={200}>
          <div className="mb-24">
            <SectionHeader 
              eyebrow={data.videoTestimonialCarousel.eyebrowLabel}
              heading={data.videoTestimonialCarousel.introLine}
              align="center"
            />
            <div className="max-w-4xl mx-auto text-center mt-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card-hover group cursor-pointer mb-8 bg-brand-dark">
                <Image 
                  src="/assets/aura-wellness-member-testimonial-video-cover.webp"
                  alt="Video testimonial from a successful Aura Wellness gym member"
                  fill
                  className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110 mb-4 ring-4 ring-white/30 backdrop-blur-sm">
                    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-brand-primary ml-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold tracking-wide drop-shadow-md text-sm md:text-base">
                    {primaryVideoCard.playButtonLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1.5 rounded-md text-white text-xs font-bold tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  {primaryVideoCard.duration}
                </div>
              </div>

              <div className="px-4 max-w-3xl mx-auto">
                <p className="text-text-heading font-extrabold text-sm md:text-base uppercase tracking-widest mb-4 opacity-70">
                  {primaryVideoCard.nameAndResult}
                </p>

                <p className="text-text-body font-medium italic text-base md:text-lg">
                  "{primaryVideoCard.englishTranslation}"
                </p>
              </div>
            </div>
          </div>
        </Animate>

        {/* Closing Action Block */}
        <Animate variant="fadeUp" duration={700}>
          <div className="flex flex-col items-center justify-center text-center bg-surface-card rounded-2xl p-8 md:p-12 shadow-card-base border border-gray-100/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
            <h3 className="text-text-heading text-xl md:text-2xl font-extrabold mb-8 max-w-2xl leading-tight">
              {data.closingCta.closingLine}
            </h3>
            <WhatsAppButton 
              href={`https://wa.me/919876543210?text=${encodeURIComponent(data.closingCta.ctaButton.preFilledWhatsAppMessage || 'Hi, I would like to lock in my free 1-day trial.')}`}
            >
              {data.closingCta.ctaButton.optionA}
            </WhatsAppButton>
          </div>
        </Animate>

      </div>
    </section>
  );
}

export default SocialProof;
