import React from 'react';

export function MeetOwner() {
  return (
    <section id="meet-owner" className="owner-section relative overflow-hidden bg-[url('/assets/aura-wellness-chennai-muscle-gain-result-2.webp')] bg-fixed bg-cover bg-center">
      {/* Dark overlay for low opacity image effect */}
      <div className="absolute inset-0 bg-black/85 z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Centered Top Heading */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
          <span className="eyebrow-label inline-block px-3.5 py-1.5 mb-4 rounded-full bg-transparent border border-[#E63946] shadow-sm text-center">
            About
          </span>
          <h2 className="section-heading text-white tracking-tight text-center">
            Meet our owner
          </h2>
        </div>

        <div className="owner-columns">

          <div className="owner-image-column">
            <img
              src="/assets/aura-wellness-trainer-karthik-profile.webp"
              alt="Rajesh Kumar - Founder of Power Fitness"
              className="owner-image"
            />
          </div>

          <div className="owner-content-column">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Rajesh Kumar</h3>
            <p className="owner-role">Founder, Power Fitness</p>
            <p className="owner-paragraph">
              I have been training people in Chennai for over 12 years. I started this gym because I wanted a place where anyone could walk in, feel welcome, and actually see results. No fancy promises. Just honest work, good trainers, and people who genuinely care about you.
            </p>
            <blockquote className="owner-quote">
              Every person who walks in here becomes part of our family. That is what Power Fitness is all about.
            </blockquote>

            <div className="owner-tags">
              <span className="owner-tag">12+ Years Experience</span>
              <span className="owner-tag">100+ Members Trained</span>
              <span className="owner-tag">Strength Training Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetOwner;
