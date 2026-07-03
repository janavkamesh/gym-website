"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeader, Animate } from '@/components/ui';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop',
    alt: 'Gym Interior 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Gym Interior 2'
  },
  {
    url: '/assets/aura-wellness-member-testimonial-video-cover.webp',
    alt: 'Member Testimonial'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Gym Interior 4'
  },
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    alt: 'Gym Interior 5'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Gym Interior 6'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    // Only open on mobile devices (width < 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setSelectedImage(url);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full py-12 lg:py-16 px-6 md:px-12 lg:px-16 bg-[#16181C]">
      <div className="max-w-7xl mx-auto">
        <Animate variant="fadeUp" duration={400}>
          <div className="flex flex-col items-center justify-center">
            <span id="gallery" className="eyebrow-label inline-block px-3.5 py-1.5 rounded-full bg-transparent border border-[#E63946] shadow-sm">
              Gallery
            </span>
            <SectionHeader 
              heading={<span className="text-white">Your journey starts here</span>}
              align="center"
            />
          </div>
        </Animate>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4">
          {galleryImages.map((image, idx) => (
            <Animate key={idx} variant="fadeUp" delay={idx * 50} duration={350}>
              <div 
                className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden group shadow-sm bg-gray-100 md:cursor-default cursor-pointer"
                onClick={() => handleImageClick(image.url)}
              >
                <Image 
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </Animate>
          ))}
        </div>
      </div>

      {/* Mobile Pop-up Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 md:hidden"
          onClick={closeLightbox}
        >
          {/* Floating Image Card Wrapper */}
          <div 
            className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-visible animate-in zoom-in duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close / Wrong Button attached to Image Corner */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center bg-black text-white rounded-full z-[110] shadow-xl border-2 border-white/10 active:scale-95 transition-transform"
              aria-label="Close gallery"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* The Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#16181C]">
              <Image 
                src={selectedImage}
                alt="Gallery zoomed popup"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
