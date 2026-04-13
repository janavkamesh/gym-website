import React from 'react';
import { Animate } from '@/components/ui';

// Unified SVG aesthetic using standard size (44) and matching stroke color outline exactly.
const OutlineStarSVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-sm">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const CalendarSVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-sm">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const CommunitySVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-sm">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const FemaleSafetySVG = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-sm">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const items = [
  { icon: <OutlineStarSVG />, label: 'Top Rated Gym' },
  { icon: <CalendarSVG />, label: 'Since 2014' },
  { icon: <CommunitySVG />, label: '1,200+ Members' },
  { icon: <FemaleSafetySVG />, label: 'Female Trainers' },
];

export function TrustSignals() {
  return (
    <section className="relative w-full z-20 px-6 py-12 md:py-16 bg-brand-primary border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          {items.map((item, i) => (
            <Animate key={item.label} variant="fadeUp" delay={i * 100} duration={600} className="flex flex-col items-center justify-center text-center w-full">
              <div className="mb-5 bg-white/20 p-4 rounded-full">
                {item.icon}
              </div>
              <p className="font-extrabold text-white text-base lg:text-lg leading-tight whitespace-nowrap">
                {item.label}
              </p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSignals;
