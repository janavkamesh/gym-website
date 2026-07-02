"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';

import { Animate, CTAButton } from '@/components/ui';
import HeroTrustBadges from '@/components/sections/HeroTrustBadges';

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // We only care about the first 1000px of scroll for this effect
      if (window.scrollY < 1000) {
        setScrollY(window.scrollY);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call just in case
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the fade and scale to make it feel like it's going back into the mobile
  // Scale goes from 1 down to 0.85
  const scale = Math.max(0.85, 1 - scrollY / 3000);
  // Opacity goes from 1 down to 0 over 800px of scroll
  const opacity = Math.max(0, 1 - scrollY / 800);

  return (
    <section 
      id="hero" 
      className="relative h-full w-full flex flex-col justify-center overflow-hidden origin-center will-change-transform"
      style={{ transform: `scale(${scale})`, opacity: opacity }}
    >
      {/* Background Image Layer & Contrast Overhaul */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/assets/aura-wellness-chennai-premium-gym-floor.webp"
          alt="Wide view of the premium Power Fitness gym floor in Chennai featuring modern equipment"
          fill
          priority
          className="object-cover object-center animate-hero-bg"
          sizes="100vw"
          quality={85}
        />
        {/* Strict dark overlay without blue tint for background opacity */}
        <div className="absolute inset-0 bg-black/70 z-0" />
      </div>

      {/* Hero Content container wrapped in explicit max-w and padding boundaries */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center py-20 lg:py-0">
        
        {/* H1: Enters first */}
        <Animate variant="fadeUp" delay={0} duration={750}>
          <h1 className="section-heading text-white tracking-tight mb-5 max-w-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="block md:inline">Your best version </span>
            <span className="block md:inline">starts here</span>
          </h1>
        </Animate>
        
        {/* Paragraph: Enters second */}
        <Animate variant="fadeUp" delay={200} duration={750}>
          <p className="body-text text-white mb-10 max-w-xl drop-shadow-md">
            {subHeadline}
          </p>
        </Animate>

        {/* CTA: Enters last */}
        <Animate variant="fadeUp" delay={400} duration={750}>
          <div className="flex flex-col items-center">
            <CTAButton
              href={`https://wa.me/919876543210?text=${encodeURIComponent(primaryButtonWaMessage)}`}
              className="relative z-10 hero-cta"
            >
              {primaryButtonLabel}
            </CTAButton>
            <HeroTrustBadges />
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default HeroSection;

