"use client";

import React, { useEffect, useState } from 'react';
import copyData from '../../../gym-website-copy.json';

export function PageLoad() {
  const data = copyData.websiteData.stateMessages.pageLoad;
  const [showExtended, setShowExtended] = useState(false);

  useEffect(() => {
    // 2.5s LCP Threshold mapping from _HANDOFF
    const timer = setTimeout(() => {
      setShowExtended(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full h-[50vh] flex-grow flex flex-col items-center justify-center px-6">
      
      {/* 
        Developer constraints explicitly block full-screen spinners.
        Deploying high-z-index fixed progress bar traversing across the viewport top boundary. 
      */}
      <style>{`
        @keyframes pageLoadingBar {
          0% { transform: translateX(-100%); width: 30%; }
          50% { transform: translateX(50%); width: 70%; }
          100% { transform: translateX(200%); width: 30%; }
        }
        .animate-page-loading-bar {
          animation: pageLoadingBar 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      
      {/* Master Loading Strip */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-brand-primary/10 z-[9999] overflow-hidden">
        <div className="h-full bg-brand-primary animate-page-loading-bar rounded-full" />
      </div>

      <div className="flex flex-col items-center justify-center p-8 text-center animate-pulse">
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary animate-spin mb-4 opacity-50">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="4.93" x2="19.07" y2="7.76"></line>
        </svg>

        <p className="text-xs md:text-sm font-extrabold text-brand-dark tracking-widest uppercase opacity-80 transition-all duration-500 ease-in-out">
          {showExtended ? data.extendedLoadMessage : data.loadingBarLabel}
        </p>
      </div>
      
    </section>
  );
}

export default PageLoad;
