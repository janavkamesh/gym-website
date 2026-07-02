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
              <StandardCard className="flex flex-col group overflow-hidden p-6 md:p-8 border-none bg-[#16181C] rounded-2xl md:rounded-3xl shadow-sm">
                <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl bg-[#16181C] shrink-0">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-3 pl-[5px] flex flex-col justify-center flex-grow">
                  <h4 className="text-lg md:text-xl font-extrabold text-white mb-1.5 md:mb-2.5 tracking-wide">
                    {program.title}
                  </h4>
                  <p className="body-text text-[#A0A8B8] flex-grow mb-5">
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
