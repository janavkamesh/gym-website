import React from 'react';
import Image from 'next/image';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';



export function ValueProp() {

  return (
    <section id="programs" className="w-full py-12 lg:py-16 px-6 md:px-12 lg:px-16 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <Animate variant="fadeUp" duration={400}>
          <div className="flex flex-col items-center justify-center">
            <span className="eyebrow-label inline-block px-3.5 py-1.5 rounded-full bg-transparent border border-[#E63946] shadow-sm">
              Programs
            </span>
            <SectionHeader 
              heading={<span className="text-white">Find the right program for you</span>}
              align="center"
            />
          </div>
        </Animate>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Strength Training',
              desc: 'Build muscle and increase power with specialized equipment.',
              image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop'
            },
            {
              title: 'Weight Loss',
              desc: 'Burn fat and achieve your ideal weight with guided cardio.',
              image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop'
            },
            {
              title: 'Personal Training',
              desc: 'Get custom workout plans and 1-on-1 coaching for rapid results.',
              image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop'
            },
            {
              title: 'CrossFit Training',
              desc: 'Join high-intensity classes to test limits and build endurance.',
              image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop'
            }
          ].map((program, idx) => (
            <Animate key={idx} variant="fadeUp" delay={idx * 75} duration={350}>
              <StandardCard className="relative flex flex-col group overflow-hidden !p-0 border-none bg-[#0B0C10] rounded-2xl md:rounded-3xl shadow-sm aspect-[4/3] lg:aspect-[16/10]">
                <Image 
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Faded Background Overlay concentrated at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/90 to-transparent transition-opacity duration-500 z-10 pointer-events-none"></div>
                
                {/* Text Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-3 md:px-8 md:pt-8 md:pb-4 flex flex-col items-center text-center justify-end h-1/2 z-20">
                  <h4 className="text-lg md:text-xl font-extrabold text-white mb-1.5 md:mb-2 tracking-wide drop-shadow-md">
                    {program.title}
                  </h4>
                  <p className="body-text text-[#A0A8B8] drop-shadow-sm line-clamp-2 md:line-clamp-none min-h-[3rem]">
                    {program.desc}
                  </p>
                </div>
              </StandardCard>
            </Animate>
          ))}
        </div>



      </div>
    </section>
  );
}

export default ValueProp;
