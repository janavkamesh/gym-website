import React from 'react';
import Link from 'next/link';
import copyData from '../../../gym-website-copy.json';
import { WhatsAppButton } from '@/components/ui';

export function NotFoundPage() {
  const data = copyData.websiteData.stateMessages.notFoundPage;

  return (
    <section className="w-full h-full flex-grow flex flex-col items-center justify-center min-h-[70vh] py-20 px-6 text-center bg-surface-base">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Visual 404 Accent background rendering behind interaction layer */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-brand-primary/5 tracking-tighter mb-2 md:-mb-8 select-none pointer-events-none">
          404
        </h1>
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Error State Recovery Headline */}
          <h2 className="text-text-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-snug lg:leading-tight max-w-2xl text-balance">
            {data.headline}
          </h2>
          
          {/* Recovery Reassurance Subtext */}
          <p className="text-text-body text-base md:text-lg lg:text-xl font-medium mb-10 leading-relaxed max-w-xl">
            {data.subText}
          </p>

          {/* Fallback Action Set configured with primary fallback routing logic */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 justify-center w-full sm:w-auto">
            {/* Native Link override to ensure client-side rapid routing back to funnel */}
            <Link 
              href="/"
              className="w-full sm:w-auto bg-brand-primary text-white font-extrabold uppercase tracking-widest text-sm py-4 px-8 rounded-md hover:bg-brand-hover hover:-translate-y-0.5 transition-all shadow-cta-base hover:shadow-cta-hover text-center"
            >
              {data.primaryCta.label}
            </Link>
            
            {/* Direct WhatsApp connection intercept */}
            <WhatsAppButton 
              href={`https://wa.me/919876543210?text=${encodeURIComponent(data.secondaryCta.preFilledWhatsAppMessage)}`}
              className="w-full sm:w-auto bg-surface-base text-brand-dark border-2 border-brand-primary hover:border-brand-primary hover:bg-brand-primary/5 shadow-none group"
            >
              {data.secondaryCta.label}
            </WhatsAppButton>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default NotFoundPage;
