import React from 'react';
import copyData from '../../../gym-website-copy.json';
import { StandardCard } from '@/components/ui';

// Using inline SVGs per Sub-Task 5.4 strictly to save HTTP requests and boost performance.

const GoogleStarSVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-yellow-400">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
  </svg>
);

const CalendarSVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const CommunitySVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const FemaleSafetySVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-saffron">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export function TrustSignals() {
  const data = copyData.websiteData.sections.trustSignals;

  return (
    <section className="relative w-full z-20 px-6 py-12 lg:-mt-12 bg-surface-base lg:bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Optional Eyebrow if needed above the grid */}
        <div className="text-center mb-8 lg:hidden">
          <span className="text-accent-saffron font-bold uppercase tracking-wider text-sm">
            {data.eyebrowLabel}
          </span>
        </div>

        {/* Grid: cols-1 → md:cols-2 → lg:cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Google Reviews (Mocked Widget) */}
          <StandardCard className="flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-3" aria-hidden="true">
                {[...Array(5)].map((_, i) => <GoogleStarSVG key={i} />)}
              </div>
              <p className="font-extrabold text-text-heading text-lg lg:text-base xl:text-lg mb-2 leading-tight">
                {data.googleReviewsWidget.starLabel}
              </p>
              <p className="text-text-body text-sm mb-4">
                {data.googleReviewsWidget.reviewCountText}
              </p>
            </div>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-primary font-bold text-sm tracking-wide inline-flex items-center hover:text-brand-hover hover:underline transition-colors"
              aria-label={data.googleReviewsWidget.ariaLabel}
            >
              {data.googleReviewsWidget.ctaLabel}
            </a>
          </StandardCard>

          {/* Card 2: Establishment Year Badge */}
          <StandardCard>
            <div className="mb-4">
              <CalendarSVG />
            </div>
            <p className="font-extrabold text-text-heading text-lg lg:text-base xl:text-lg mb-2 leading-tight">
              {data.establishmentYearBadge.badgeText}
            </p>
            <p className="text-text-body text-sm">
              {data.establishmentYearBadge.subLabel}
            </p>
          </StandardCard>

          {/* Card 3: Member Count Badge */}
          <StandardCard>
            <div className="mb-4">
              <CommunitySVG />
            </div>
            <p className="font-extrabold text-text-heading text-lg lg:text-base xl:text-lg mb-2 leading-tight">
              {data.memberCountBadge.badgeText}
            </p>
            <p className="text-text-body text-sm">
              {data.memberCountBadge.subLabel}
            </p>
          </StandardCard>

          {/* Card 4: Female Safety Badge */}
          <StandardCard>
            <div className="mb-4">
              <FemaleSafetySVG />
            </div>
            <p className="font-extrabold text-text-heading text-lg lg:text-base xl:text-lg mb-2 leading-tight">
              {data.femaleSafetyBadge.badgeText}
            </p>
            <p className="text-text-body text-sm">
              {data.femaleSafetyBadge.subLabel}
            </p>
          </StandardCard>

        </div>
      </div>
    </section>
  );
}

export default TrustSignals;
