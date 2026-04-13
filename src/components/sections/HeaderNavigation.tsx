import React from 'react';
import Link from 'next/link';

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9H7v-2h10v2zm0-4H7V5h10v2z"/>
  </svg>
);

export function HeaderNavigation() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black shadow-sm border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Left: Logo aligned to content grid */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="#hero" className="text-white font-extrabold text-lg md:text-xl tracking-tight" aria-label="Aura Wellness Home">
            Aura Wellness Chennai
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-grow pt-1">
          <Link href="#hero" className="text-gray-300 font-medium hover:text-brand-primary transition-colors text-sm">Home</Link>
          <Link href="#results" className="text-gray-300 font-medium hover:text-brand-primary transition-colors text-sm">Results</Link>
          <Link href="#how-it-works" className="text-gray-300 font-medium hover:text-brand-primary transition-colors text-sm">How It Works</Link>
          <Link href="#trainers" className="text-gray-300 font-medium hover:text-brand-primary transition-colors text-sm">Trainers</Link>
          <Link href="#pricing" className="text-gray-300 font-medium hover:text-brand-primary transition-colors text-sm">Pricing</Link>
        </nav>

        {/* Right: Contact info + CTA aligned to content grid */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          
          <div className="hidden xl:flex items-center gap-4 pt-1">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <PhoneIcon />
              <span className="text-[13px] font-semibold tracking-wide">+91 98765 43210</span>
            </a>
            
            <div className="h-4 w-px bg-gray-300"></div>
            
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_4px_rgba(230,57,70,0.6)]"></div>
              <span className="text-[13px] text-gray-300 font-medium tracking-wide">5:30AM - 10PM</span>
            </div>
          </div>
          
          <Link 
            href="#pricing"
            className="flex items-center gap-2 text-white bg-brand-primary text-[13px] md:text-sm py-2 px-5 md:py-2.5 md:px-6 font-bold shadow-md hover:bg-brand-hover hover:shadow-lg transition-all rounded-full mr-0"
          >
            <ChatIcon />
            Free Trial - Chat with Us
          </Link>
        </div>

      </div>
    </header>
  );
}

export default HeaderNavigation;
