'use client';

import React, { useState } from 'react';
import { SectionHeader, Animate } from '@/components/ui';

export function FaqSection() {
  const faqs = [
    { question: 'Is parking available?', answer: 'Yes, we have dedicated, secure parking on-site for all Aura Wellness members. No need to circle the block.' },
    { question: 'What happens during my 1-day free trial?', answer: 'You get full access to the floor, exactly like a paying member. One of our trainers will show you around, but there is zero pressure to buy.' },
    { question: 'Can I pause my membership if I travel?', answer: 'Absolutely. We understand life happens. You can pause your membership for up to 30 days every year without any penalty or hidden fees.' },
    { question: 'Do I need to be fit to start?', answer: 'Not at all. Over 80% of our members started just like you. We build programs tailored entirely to your absolute beginner status.' },
    { question: 'Are personal trainers included?', answer: 'Every new member gets a complimentary 1-on-1 strategy session. If you want continued dedicated coaching, you can upgrade to Premium Training at any time.' }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="w-full py-16 px-6 lg:py-24 bg-white text-gray-900 border-t border-gray-100/50">
      <div className="max-w-4xl mx-auto">
        <Animate variant="fadeUp" duration={700}>
          <SectionHeader 
            eyebrow="Got Questions?"
            heading="Clear Answers. No Hidden Agendas."
            align="center"
          />
        </Animate>
        
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Animate key={index} variant="fadeUp" delay={index * 100} duration={600}>
                <div 
                  onClick={() => toggleOpen(index)}
                  className="px-6 py-4 md:py-5 bg-surface-base border border-gray-100/80 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-shadow cursor-pointer select-none group"
                >
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-white font-bold text-base md:text-lg pr-4 group-hover:text-brand-primary transition-colors">
                      {faq.question}
                    </h4>
                    <span className="text-white group-hover:text-brand-primary transform transition-colors duration-300">
                      {isOpen ? (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      ) : (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      )}
                    </span>
                  </div>
                  
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 md:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">{faq.answer}</p>
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
