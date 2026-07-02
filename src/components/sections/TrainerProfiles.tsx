import React from 'react';
import Image from 'next/image';
import { SectionHeader, StandardCard, WhatsAppButton, Animate } from '@/components/ui';

export function TrainerProfiles() {
  const customTrainers = [
    {
      id: "trainer-1",
      name: "Karthik",
      role: "Strength and personal training coach",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "trainer-2",
      name: "Arun",
      role: "Weight loss and fitness coach",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "trainer-3",
      name: "Dinesh",
      role: "Crossfit and strength coach",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="w-full py-12 lg:py-16 px-6 md:px-12 lg:px-16 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto">
        <Animate variant="fadeUp" duration={400}>
          <div className="flex flex-col items-center justify-center">
            <span className="eyebrow-label inline-block px-3.5 py-1.5 rounded-full bg-transparent border border-[#E63946] shadow-sm">
              Trainers
            </span>
            <SectionHeader 
              heading={<span className="text-white">Trainers behind the result</span>}
              align="center"
            />
          </div>
        </Animate>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {customTrainers.map((trainer, index) => (
            <Animate key={trainer.id} variant="fadeUp" delay={index * 75} duration={350}>
              <StandardCard className="flex flex-col h-full !p-0 overflow-hidden group bg-[#16181C] border-none shadow-sm">
                 <div className="p-6 md:p-8 flex flex-col flex-grow">
                   <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0B0C10] mb-6 border-none">
                     <Image 
                       src={trainer.image}
                       alt={`${trainer.name}, ${trainer.role}`}
                       fill
                       className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                       sizes="(max-width: 1024px) 100vw, 33vw"
                     />
                   </div>
                   <h4 className="text-lg md:text-xl font-extrabold text-white mb-1.5 tracking-wide">
                    {trainer.name}
                  </h4>
                   <p className="text-xs font-extrabold text-[#A0A8B8] uppercase tracking-widest mb-3 leading-relaxed min-h-[3rem]">
                     {trainer.role}
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

export default TrainerProfiles;
