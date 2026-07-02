'use client';

import React, { useState } from 'react';
import { SectionHeader, Animate } from '@/components/ui';

export function FaqSection() {
  const faqs = [
    { question: 'Do I need any experience to join?', answer: 'Not at all. Whether you are a complete beginner or getting back after a long break, our trainers will guide you every step of the way.' },
    { question: 'What programs do you offer at Power Fitness?', answer: 'We offer Strength Training, Weight Loss, CrossFit, and Personal Training — something for every fitness goal.' },
    { question: 'How do I get started?', answer: 'Simple. Just walk in or send us a WhatsApp message and we will take care of everything from there.' },
    { question: 'Is there a joining fee?', answer: 'No hidden charges, no surprises. You only pay for your membership and that is it.' },
    { question: 'Is Power Fitness suitable for women?', answer: 'Absolutely. Power Fitness is a welcoming space for everyone. Many of our members are women and they train here comfortably every single day.' }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="w-full py-12 lg:py-16 px-6 md:px-12 lg:px-16 bg-[#16181C] text-white border-t border-[#0B0C10]">
      <div className="max-w-4xl mx-auto">
        <Animate variant="fadeUp" duration={400}>
          <div className="flex flex-col items-center justify-center">
            <span className="eyebrow-label inline-block px-3.5 py-1.5 rounded-full bg-transparent border border-[#E63946] shadow-sm">
              Got questions?
            </span>
            <SectionHeader 
              heading={<span className="text-white">Quick answers to your questions</span>}
              align="center"
            />
          </div>
        </Animate>
        
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Animate key={index} variant="fadeUp" delay={index * 50} duration={350}>
                <div 
                  onClick={() => toggleOpen(index)}
                  className="px-6 py-4 md:py-5 bg-[#0B0C10] border border-[#0B0C10] rounded-2xl md:rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-shadow cursor-pointer select-none group"
                >
                  <div className="flex justify-between items-center w-full">
                    <h4 className={`font-bold text-base md:text-lg pr-4 transition-colors ${isOpen ? 'text-[#E63946]' : 'text-white'}`}>
                      {faq.question}
                    </h4>
                    <span className={`transform transition-colors duration-300 ${isOpen ? 'text-[#E63946]' : 'text-white'}`}>
                      {isOpen ? (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      ) : (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      )}
                    </span>
                  </div>
                  
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 md:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="body-text text-[#A0A8B8]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
