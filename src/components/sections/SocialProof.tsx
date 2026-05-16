import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';

export function SocialProof() {
  const data = copyData.websiteData.sections.socialProof;

  const images = [
    "/assets/divya_transformation.png",
    "/assets/karthikeyan_muscle_gain.png",
    "/assets/meenakshi_weight_loss.png"
  ];

  // Results-focused alt text for visually impaired users (WCAG 1.1.1)
  const altTexts = [
    "Divya's before and after transformation — lost 14kg in 90 days at Aura Wellness Chennai",
    "Karthikeyan's before and after — 12kg muscle gain transformation at Aura Wellness Anna Nagar",
    "Meenakshi's before and after weight loss — dropped 3 dress sizes in 90 days at Aura Wellness"
  ];

  const primaryVideoCard = data.videoTestimonialCarousel.videoCards[0];

  return (
    <section id="results" className="w-full py-16 px-6 lg:py-24 bg-surface-base border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <Animate variant="fadeUp" duration={700}>
          <SectionHeader
            eyebrow={data.eyebrowLabel}
            heading={data.headline}
            align="center"
          />
        </Animate>

        {/* Member Transformation Photo Cards */}
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

        {/* Member Story — Photo Testimonial (no fake video player) */}
        <Animate variant="fadeUp" duration={750} delay={200}>
          <div className="mb-24">
            <SectionHeader
              heading={data.videoTestimonialCarousel.introLine}
              align="center"
            />
            <div className="max-w-4xl mx-auto text-center mt-8">
              {/* Photo testimonial card — honest, no fake interactive elements */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card-hover mb-8 bg-brand-dark">
                <Image
                  src="/assets/aura-wellness-member-testimonial-video-cover.webp"
                  alt={`Aura Wellness member ${primaryVideoCard.nameAndResult} — real transformation story`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                {/* Quote overlay — no fake play button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
                  <p className="text-white font-bold text-xs uppercase tracking-widest mb-2 opacity-70">
                    {primaryVideoCard.nameAndResult}
                  </p>
                  <p className="text-white font-medium italic text-base md:text-lg leading-relaxed">
                    &ldquo;{primaryVideoCard.englishTranslation}&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-text-body font-medium text-sm md:text-base opacity-70 max-w-xl mx-auto">
                Results like this happen every 90 days at Aura Wellness. Yours could be next.
              </p>
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
