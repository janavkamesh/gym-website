'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export function HeaderNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'header-glass border-brand-primary/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-surface-base/90 border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label="Aura Wellness Home"
          >
            {/* Amber accent dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(245,158,11,0.6)] group-hover:shadow-[0_0_14px_rgba(245,158,11,0.9)] transition-shadow duration-300" />
            <span className="text-white font-extrabold text-lg md:text-xl tracking-tight">
              Aura <span className="text-gradient-amber">Wellness</span>
            </span>
          </Link>
        </div>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-grow pt-0.5">
          {[
            { href: '#hero',        label: 'Home'       },
            { href: '#results',     label: 'Results'    },
            { href: '#how-it-works',label: 'How It Works'},
            { href: '#trainers',    label: 'Trainers'   },
            { href: '#pricing',     label: 'Pricing'    },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-text-body text-sm font-medium hover:text-brand-primary transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">

          <div className="hidden xl:flex items-center gap-4 pt-0.5">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-text-body hover:text-white transition-colors duration-200"
            >
              <PhoneIcon />
              <span className="text-[13px] font-semibold tracking-wide">+91 98765 43210</span>
            </a>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[13px] text-text-body font-medium">5:30AM – 10PM</span>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%201-day%20trial%20at%20Aura%20Wellness"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer flex items-center gap-2 bg-brand-primary text-brand-dark text-[13px] md:text-sm py-2.5 px-5 md:py-3 md:px-6 font-extrabold shadow-cta-hover hover:bg-brand-hover hover:shadow-cta-heavy transition-all duration-300 rounded-full"
          >
            Free Trial
          </a>

        </div>
      </div>
    </header>
  );
}

export default HeaderNavigation;
