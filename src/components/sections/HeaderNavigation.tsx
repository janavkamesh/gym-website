"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import copyData from '../../../gym-website-copy.json';
import { CTAButton } from '@/components/ui';

const heroData = copyData.websiteData.sections.heroSection;

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);


export function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scrolling when the full-screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Memberships', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300); // Wait for menu close animation and overflow unlock
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-[#0B0C10] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 h-[92px] md:h-[96px] lg:h-20 flex items-center justify-between opacity-0 animate-[fade-in-down_1s_ease-out_2s_forwards]">

          {/* Left: Logo aligned to content grid */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2.5 md:gap-2.5 xl:gap-3 text-white md:hover:text-[#E63946] active:text-[#E63946] transition-colors relative z-[60]" aria-label="Power Fitness Home">
              <img 
                src="/icon.png" 
                alt="Power Fitness Logo" 
                className="w-[35px] h-[35px] sm:w-[37px] sm:h-[37px] md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain" 
              />
              <span 
                className="font-extrabold text-[24px] sm:text-[26px] md:text-[22px] lg:text-[25px] xl:text-[28px] tracking-tight" 
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Power Fitness
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav Links (Hidden on Mobile/Tablet) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-grow pt-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-white hover:text-[#E63946] transition-colors text-sm font-semibold">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Contact info + Desktop CTA / Mobile Hamburger */}
          <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0 relative z-[60]">

            <div className="hidden xl:flex items-center gap-4 pt-1">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white hover:text-[#E63946] transition-colors">
                <PhoneIcon />
                <span className="text-[13px] font-semibold tracking-wide">+91 98765 43210</span>
              </a>

              <div className="h-4 w-px bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] shadow-[0_0_4px_rgba(230,57,70,0.6)]"></div>
                <span className="text-[13px] text-white font-medium tracking-wide">5:30AM - 10PM</span>
              </div>
            </div>

            {/* Desktop-only Join Now Button */}
            <div className="hidden lg:block">
              <CTAButton
                href={`https://wa.me/919876543210?text=${encodeURIComponent(heroData.primaryButton.preFilledWhatsAppMessageTask3)}`}
                className="mr-0 shrink-0 nav-cta"
              >
                Join Now
              </CTAButton>
            </div>

            {/* Mobile/Tablet Hamburger Menu Icon (Animated Morph to X) */}
            <button
              className="lg:hidden relative w-12 h-12 flex items-center justify-center text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="relative w-8 h-6">
                <span className={`absolute left-0 w-full h-[3px] rounded-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-2.5 rotate-45' : 'top-0'}`}></span>
                <span className={`absolute left-0 top-2.5 w-full h-[3px] rounded-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-0'}`}></span>
                <span className={`absolute left-0 w-full h-[3px] rounded-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-2.5 -rotate-45' : 'top-5'}`}></span>
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Full Screen Overlay Menu (Mobile/Tablet) */}
      <div
        className={`fixed inset-0 bg-[#0B0C10] z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center px-6 pt-20 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center gap-8 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide hover:text-[#E63946] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-center mt-4">
          <CTAButton
            href={`https://wa.me/919876543210?text=${encodeURIComponent(heroData.primaryButton.preFilledWhatsAppMessageTask3)}`}
            className="hero-cta"
          >
            Join Now
          </CTAButton>
        </div>
      </div>
    </>
  );
}

export default HeaderNavigation;
