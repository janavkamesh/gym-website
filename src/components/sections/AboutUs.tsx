import React from 'react';
import { SectionHeader, Animate } from '@/components/ui';

export function AboutUs() {
  return (
    <section id="about" className="w-full py-16 px-6 lg:py-24 bg-surface-base border-t-2 border-brand-primary/10">
      <div className="max-w-6xl mx-auto">
        <Animate variant="scaleUp" duration={700}>
          <div className="bg-white border border-gray-100 rounded-[2rem] shadow-2xl shadow-brand-primary/5 p-10 md:p-16 lg:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
            
            {/* Subtle Ambient Glows */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />

            <Animate variant="fadeUp" duration={600}>
              <SectionHeader 
                eyebrow="Our Story"
                heading="Built For Real People."
                align="center"
                className="z-10 relative mb-12 text-gray-900"
              />
            </Animate>
            
            <div className="z-10 relative max-w-4xl mx-auto space-y-8 md:space-y-12">
              <Animate variant="slideRight" duration={650} delay={100}>
                <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed text-balance">
                  The modern fitness industry is broken. It runs on intimidation, hidden fees, and aggressive upselling. We built Aura Wellness in 2014 to be the exact opposite.
                </p>
              </Animate>
              <Animate variant="slideRight" duration={650} delay={200}>
                <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed text-balance opacity-90">
                  We don't care what you wear, how much you lift, or if you have never touched a barbell before. Our only goal is to provide a clean, hyper-professional environment where you can walk in, do the work, and feel powerfully respected every single day.
                </p>
              </Animate>
              {/* Trust Signal Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100 w-full max-w-3xl mx-auto">
                {[
                  { stat: '1,200+', label: 'Members Trained Since 2014' },
                  { stat: '4.8★', label: 'Average Google Rating' },
                  { stat: '90-Day', label: 'Results Guarantee or Full Refund' },
                ].map((item, i) => (
                  <Animate key={item.stat} variant="fadeUp" delay={150 + i * 120} duration={600}>
                    <div className="flex flex-col items-center text-center bg-surface-card rounded-2xl px-6 py-5 border border-gray-100 shadow-sm">
                      <span className="text-3xl font-black text-brand-primary mb-1">{item.stat}</span>
                      <span className="text-sm font-semibold text-text-body leading-snug">{item.label}</span>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>

          </div>
        </Animate>
      </div>
    </section>
  );
}

export default AboutUs;

