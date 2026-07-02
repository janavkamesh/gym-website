import React from 'react';
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
              <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden group shadow-sm bg-gray-100">
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
    </section>
  );
}

export default Gallery;
