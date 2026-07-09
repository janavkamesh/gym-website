import React from 'react';
import { Animate } from '@/components/ui';

export function PricingTable() {
  return (
    <section id="pricing" className="w-full py-12 lg:py-16 px-6 md:px-12 lg:px-16 bg-[#0B0C10]">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Main Heading */}
        <Animate variant="fadeUp" duration={400}>
          <span className="eyebrow-label inline-block px-3.5 py-1.5 rounded-full bg-transparent border border-[#E63946] shadow-sm mb-4">
            Membership
          </span>
          <h2 className="section-heading text-white text-center tracking-tight mb-6">
            Start Your Journey Today.
          </h2>
        </Animate>
        
        {/* Subtext Paragraph */}
        <Animate variant="fadeUp" delay={100} duration={400}>
          <p className="body-text text-[#A0A8B8] max-w-3xl mx-auto mb-8">
            No complicated plans. No hidden charges. One simple membership that gives you full access to Strength Training, Weight Loss, CrossFit, and Personal Training. Walk in, train hard, and let our certified coaches handle the rest.
          </p>
        </Animate>

        {/* Pricing Line */}
        <Animate variant="fadeUp" delay={200} duration={400} className="w-full md:w-auto">
          <div className="bg-[#16181C] border-none rounded-2xl md:rounded-3xl px-6 py-4 mb-10 shadow-sm w-full md:w-auto">
            <p className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
              Membership starts from just <span className="text-brand-primary">₹899/Month</span>
            </p>
          </div>
        </Animate>

        {/* CTA Button */}
        <Animate variant="fadeUp" delay={300} duration={400}>
          <a 
            href="https://wa.me/919876543210?text=Hi,%20I'm%20ready%20to%20start%20my%20fitness%20journey!" 
            className="btn membership-cta bg-[#E63946] text-white hover:bg-[#D90429] shadow-lg"
          >
            Join Now
          </a>
        </Animate>

      </div>
    </section>
  );
}

export default PricingTable;
