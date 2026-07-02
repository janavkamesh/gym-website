"use client";

import React, { useRef, useEffect } from 'react';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';

const testimonials = [
  {
    name: "Ramesh Kumar",
    text: "I joined Power Fitness 6 months ago. I was not confident at all. Now I feel stronger and I actually look forward to coming every day."
  },
  {
    name: "Divya",
    text: "The trainers here are very supportive. They never make you feel like a beginner. I lost weight and I feel so much better about myself."
  },
  {
    name: "Aakash M",
    text: "Honestly I tried two gyms before this. This one is different. The coaches actually follow up and make sure you are doing it right."
  },
  {
    name: "Preethi",
    text: "I was scared to join a gym. But here nobody judges you. Everyone is focused on their own goals. I feel very comfortable training here."
  },
  {
    name: "Kiran T",
    text: "Three months in and I can already see the difference. The CrossFit sessions are tough but the trainer makes sure you don't give up."
  },
  {
    name: "Sowmya Lakshmi",
    text: "I came here for weight loss and I got so much more. Better sleep, more energy, more confidence. This place genuinely changed my routine."
  }
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-1 text-[#E63946]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ))}
  </div>
);

const GoogleLogo = () => (
  <svg width="100" height="32" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
    <path d="M12.23 23.95C5.46 23.95 0 18.59 0 11.97C0 5.37 5.46 0 12.23 0C15.91 0 18.53 1.45 20.5 3.33L18.19 5.65C16.78 4.33 14.88 3.29 12.23 3.29C7.38 3.29 3.59 7.18 3.59 11.99C3.59 16.8 7.38 20.69 12.23 20.69C15.4 20.69 17.21 19.41 18.36 18.27C19.29 17.34 19.91 16.03 20.14 14.21H12.23V10.94H23.36C23.47 11.51 23.53 12.2 23.53 12.96C23.53 15.42 22.86 18.45 20.66 20.64C18.53 22.84 15.82 23.95 12.23 23.95Z" fill="#4285F4" />
    <path d="M30.73 16.14C30.73 20.55 27.27 23.95 22.88 23.95C18.48 23.95 15.02 20.55 15.02 16.14C15.02 11.71 18.48 8.31 22.88 8.31C27.27 8.31 30.73 11.71 30.73 16.14ZM27.42 16.14C27.42 13.82 25.29 11.51 22.88 11.51C20.46 11.51 18.33 13.82 18.33 16.14C18.33 18.43 20.46 20.75 22.88 20.75C25.29 20.75 27.42 18.43 27.42 16.14Z" fill="#EA4335" />
    <path d="M47.24 16.14C47.24 20.55 43.78 23.95 39.39 23.95C34.99 23.95 31.53 20.55 31.53 16.14C31.53 11.71 34.99 8.31 39.39 8.31C43.78 8.31 47.24 11.71 47.24 16.14ZM43.93 16.14C43.93 13.82 41.8 11.51 39.39 11.51C36.97 11.51 34.84 13.82 34.84 16.14C34.84 18.43 36.97 20.75 39.39 20.75C41.8 20.75 43.93 18.43 43.93 16.14Z" fill="#FBBC05" />
    <path d="M62.61 9.07V23.23C62.61 29.41 59.27 31.93 54.81 31.93C50.6 31.93 48.06 29.11 47.1 26.83L49.99 25.62C50.59 26.99 52.19 28.73 54.81 28.73C57.34 28.73 59.35 27.16 59.35 23.7V22.65H59.24C58.46 23.61 56.88 23.95 54.75 23.95C50.41 23.95 46.61 20.47 46.61 16.16C46.61 11.82 50.41 8.31 54.75 8.31C56.88 8.31 58.46 8.65 59.24 9.59H59.35V9.07H62.61ZM59.57 16.16C59.57 13.91 57.34 11.51 55.03 11.51C52.64 11.51 50.51 13.91 50.51 16.16C50.51 18.38 52.64 20.75 55.03 20.75C57.34 20.75 59.57 18.38 59.57 16.16Z" fill="#4285F4" />
    <path d="M66.45 1.05H69.75V23.51H66.45V1.05Z" fill="#34A853" />
    <path d="M81.28 20.75C79.2 20.75 77.01 19.89 75.98 18.17L87.41 13.43L87.08 12.6C86.29 10.63 83.74 8.31 80.89 8.31C76.84 8.31 73.18 11.45 73.18 16.14C73.18 20.41 76.81 23.95 81.28 23.95C84.97 23.95 87.16 21.69 88.03 20.35L85.42 18.6C84.49 19.98 83.14 20.75 81.28 20.75ZM81.01 11.3C82.35 11.3 83.47 11.99 83.85 12.96L76.4 16.05C76.4 12.59 79.03 11.3 81.01 11.3Z" fill="#EA4335" />
  </svg>
);

const SmallGoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.8 15.71 17.58V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
    <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.58C14.73 18.24 13.47 18.64 12 18.64C9.15 18.64 6.74 16.71 5.86 14.12H2.17V16.98C3.99 20.61 7.72 23 12 23Z" fill="#34A853" />
    <path d="M5.86 14.12C5.64 13.46 5.51 12.75 5.51 12C5.51 11.25 5.64 10.54 5.86 9.88V7.02H2.17C1.43 8.5 1 10.2 1 12C1 13.8 1.43 15.5 2.17 16.98L5.86 14.12Z" fill="#FBBC05" />
    <path d="M12 5.36C13.62 5.36 15.07 5.92 16.21 7L19.36 3.85C17.46 2.07 14.97 1 12 1C7.72 1 3.99 3.39 2.17 7.02L5.86 9.88C6.74 7.29 9.15 5.36 12 5.36Z" fill="#EA4335" />
  </svg>
);

const BlueCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 fill-blue-500 ml-1">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01" stroke="white" strokeWidth="3"></polyline>
  </svg>
);

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const intervalId = setInterval(() => {
      if (container && !isHovering.current) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        // If at the end, jump back to start, else scroll one chunk
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardElement = container.firstElementChild as HTMLElement;
          const scrollAmount = cardElement ? cardElement.clientWidth + 16 : clientWidth; // +16 for gap
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2000); // 2 seconds per card

    return () => clearInterval(intervalId);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = cardElement ? cardElement.clientWidth + 16 : 320;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = cardElement ? cardElement.clientWidth + 16 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="results" className="relative w-full py-12 lg:py-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop')] bg-fixed bg-cover bg-center">
      {/* Dark overlay for low opacity image effect */}
      <div className="absolute inset-0 bg-black/85 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <Animate variant="fadeUp" duration={400}>
          <div className="flex flex-col items-center justify-center">
            <span className="eyebrow-label inline-block px-3.5 py-1.5 rounded-full bg-transparent border border-[#E63946] shadow-sm">
              Testimonials
            </span>
            <h2 className="section-heading text-white text-center tracking-tight">
              Real results from real people
            </h2>
          </div>
        </Animate>

        {/* Scroll Container */}
        <div
          className="relative w-full px-2 group"
          onMouseEnter={() => isHovering.current = true}
          onMouseLeave={() => isHovering.current = false}
          onTouchStart={() => isHovering.current = true}
          onTouchEnd={() => isHovering.current = false}
        >
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 z-20 w-10 h-10 bg-[#0B0C10] border border-[#0B0C10] rounded-full shadow-md flex items-center justify-center hover:bg-[#16181C] text-white active:text-[#E63946] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5 transition-colors">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 z-20 w-10 h-10 bg-[#0B0C10] border border-[#0B0C10] rounded-full shadow-md flex items-center justify-center hover:bg-[#16181C] text-white active:text-[#E63946] transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5 transition-colors">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 hide-scrollbar w-full py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />

            {testimonials.map((testimony, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-full sm:w-[320px] md:w-[calc(33.333%-1rem)]"
              >
                <div className="flex flex-col h-full bg-[#0B0C10] rounded-2xl md:rounded-3xl p-6 shadow-sm border border-[#0B0C10]">

                  {/* Reviewer Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {testimony.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-white leading-tight">
                          {testimony.name}
                        </h4>
                        <p className="text-xs text-[#A0A8B8] font-medium">6 months ago</p>
                      </div>
                    </div>
                    <SmallGoogleIcon />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center mb-3">
                    <StarRating />
                    <BlueCheck />
                  </div>

                  {/* Review Text */}
                  <p className="body-text text-[#A0A8B8] flex-grow">
                    {testimony.text}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SocialProof;
