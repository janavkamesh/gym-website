import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeaderNavigation() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Left: Branding Logo strictly replacing generic setup */}
        <div className="flex-shrink-0 flex items-center pt-1 md:pt-0">
          <Link href="/" className="relative h-10 w-40 block" aria-label="Aura Wellness Home">
            <Image 
              src="/assets/aura-wellness-chennai-logo.webp"
              alt="Aura Wellness Gym Chennai Logo"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </Link>
        </div>

        {/* Center: Main Navigation Links hidden on mobile */}
        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12 flex-grow">
          <Link href="#home" className="text-gray-800 font-medium hover:text-brand-primary transition-colors text-base">Home</Link>
          <Link href="#services" className="text-gray-800 font-medium hover:text-brand-primary transition-colors text-base">Services</Link>
          <Link href="#pricing" className="text-gray-800 font-medium hover:text-brand-primary transition-colors text-base">Pricing</Link>
          <Link href="#transform" className="text-gray-800 font-medium hover:text-brand-primary transition-colors text-base">Transform</Link>
        </nav>

        {/* Right: Booking Button removing WhatsApp stubs */}
        <div className="flex items-center gap-4 lg:gap-8 flex-shrink-0">
          <Link 
            href="#booking"
            className="flex-shrink-0 text-white bg-text-heading text-sm md:text-base py-3 px-8 font-bold shadow-none hover:bg-black transition-colors rounded-sm"
          >
            Claim Free Trial
          </Link>
        </div>

      </div>
    </header>
  );
}

export default HeaderNavigation;
