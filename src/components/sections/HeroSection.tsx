import React from 'react';
import Image from 'next/image';
import copyData from '../../../gym-website-copy.json';
import { Animate } from '@/components/ui';

const heroData = copyData.websiteData.sections.heroSection;

export interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  primaryButtonLabel?: string;
  primaryButtonWaMessage?: string;
}

export function HeroSection({
  headline           = heroData.headlineOptions.optionA,
  subHeadline        = heroData.subHeadline,
  primaryButtonLabel = heroData.primaryButton.labelOptions.optionA,
  primaryButtonWaMessage = heroData.primaryButton.preFilledWhatsAppMessageTask3,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background image ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-surface-base">
        <Image
          src="/assets/aura-wellness-chennai-premium-gym-floor.webp"
          alt="Premium Aura Wellness gym floor in Anna Nagar, Chennai"
          fill
          priority
          className="object-cover object-center animate-hero-bg"
          sizes="100vw"
          quality={85}
        />
        {/* Multi-layer overlay: bottom-up gradient + dark veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-surface-base/20 z-10" />
        <div className="absolute inset-0 bg-surface-base/40 z-10" />
      </div>

      {/* ── Ambient amber orb (decorative depth) ─────────────────── */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none z-10 animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)' }}
      />

      {/* ── Hero content ──────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center py-24 lg:py-0">

        {/* Pre-headline badge */}
        <Animate variant="fadeUp" delay={0} duration={700}>
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/25 text-brand-glow text-xs font-extrabold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            Anna Nagar&apos;s Most Trusted Gym — Since 2014
          </div>
        </Animate>

        {/* H1 */}
        <Animate variant="fadeUp" delay={120} duration={800}>
          <h1 className="text-white text-[2.1rem] md:text-[3rem] lg:text-[3.25rem] font-black leading-[1.1] tracking-tight mb-6 max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {headline}
          </h1>
        </Animate>

        {/* Subheadline */}
        <Animate variant="fadeUp" delay={240} duration={750}>
          <p className="text-text-body text-sm md:text-base mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md">
            {subHeadline}
          </p>
        </Animate>

        {/* CTA */}
        <Animate variant="fadeUp" delay={380} duration={750}>
          <div className="flex flex-col items-center gap-4">
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(primaryButtonWaMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer animate-cta-glow relative z-10 bg-brand-primary text-brand-dark font-extrabold text-base md:text-lg py-4 px-12 rounded-full hover:bg-brand-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-h-[56px]"
            >
              {primaryButtonLabel}
            </a>
            <p className="text-text-muted text-xs font-semibold tracking-wide">
              {heroData.primaryButton.microCopyBelowButton}
            </p>
          </div>
        </Animate>

        {/* Social proof micro-bar */}
        <Animate variant="fadeUp" delay={520} duration={700}>
          <div className="mt-14 flex items-center gap-6 flex-wrap justify-center">
            {[
              { val: '4.8★', sub: 'Google Rating' },
              { val: '1,200+', sub: 'Members' },
              { val: '90-Day', sub: 'Guarantee' },
            ].map(({ val, sub }) => (
              <div key={val} className="flex flex-col items-center gap-0.5">
                <span className="text-brand-glow font-black text-lg leading-none">{val}</span>
                <span className="text-text-muted text-[10px] uppercase tracking-widest font-bold">{sub}</span>
              </div>
            ))}
          </div>
        </Animate>

      </div>

      {/* ── Bottom fade into next section ─────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent z-20 pointer-events-none" />
    </section>
  );
}

export default HeroSection;
