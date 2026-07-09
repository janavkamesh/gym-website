import React from 'react';
import copyData from '../../../gym-website-copy.json';

const InstaSVG = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FBSVG = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YouTubeSVG = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export function Footer() {
  const data = copyData.websiteData.sections.footer;

  return (
    <footer id="contact" className="w-full relative z-40 bg-[#0B0C10] mt-auto overflow-hidden">


      {/* 2. Primary 4-Col Integration Grid */}
      <div className="w-full max-w-7xl mx-auto py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-[60px] xl:gap-[80px]">

          {/* Column 1: Core Platform Identification */}
          <div className="flex flex-col col-span-1 lg:col-span-1 order-1">
            <h4 className="flex items-center gap-2 text-white text-2xl tracking-tight font-extrabold mb-7">
              <img src="/icon.png" alt="Power Fitness Logo" className="w-7 h-7 object-contain" />
              <span>Power Fitness</span>
            </h4>
            <p className="body-text text-[#A0A8B8] mb-6">
              A gym that trains real people and delivers real results. Chennai's own since 2014.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#16181C] text-white transition-all duration-300 hover:bg-[#E63946] hover:text-white hover:shadow-lg" 
                aria-label={data.primaryFooterGrid.columnAbout.socialMediaLinks.instagram.action}
              >
                <InstaSVG />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#16181C] text-white transition-all duration-300 hover:bg-[#E63946] hover:text-white hover:shadow-lg" 
                aria-label={data.primaryFooterGrid.columnAbout.socialMediaLinks.facebook.action}
              >
                <FBSVG />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#16181C] text-white transition-all duration-300 hover:bg-[#E63946] hover:text-white hover:shadow-lg" 
                aria-label={data.primaryFooterGrid.columnAbout.socialMediaLinks.youtube.action}
              >
                <YouTubeSVG />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Layer */}
          <div className="flex flex-col col-span-1 lg:col-span-1 order-4 lg:order-2 text-left">
            <h4 className="text-white text-base font-extrabold tracking-wide mb-7 uppercase">
              Explore
            </h4>
            <ul className="flex flex-col items-start gap-4 mt-1">
              <li><a href="#" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">Home</a></li>
              <li><a href="#programs" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">Programs</a></li>
              <li><a href="#gallery" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">Gallery</a></li>
              <li><a href="#trainers" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">Trainers</a></li>
              <li><a href="#testimonials" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">Testimonials</a></li>
              <li><a href="#pricing" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">Membership</a></li>
              <li><a href="#faq" className="text-sm tracking-wide transition-colors text-[#A0A8B8] hover:text-[#E63946] font-medium">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Hours Protocol */}
          <div className="flex flex-col col-span-1 lg:col-span-1 order-3 lg:order-3">
            <h4 className="text-white text-base font-extrabold tracking-wide mb-7 uppercase">
              Opening hours
            </h4>
            <ul className="flex flex-col gap-3 mb-8">
              {data.primaryFooterGrid.columnOperatingHours.hours.map((h, idx) => (
                <li key={idx} className="flex justify-between items-center text-base border-b border-[#16181C] pb-2.5 font-medium text-[#A0A8B8]">
                  <span>{h.days}</span>
                  <span className="text-[#A0A8B8] font-mono text-sm">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Full Pipeline Contact Output */}
          <div className="flex flex-col col-span-1 lg:col-span-1 order-2 lg:order-4">
            <h4 className="text-white text-base font-extrabold tracking-wide mb-7 uppercase">
              Contact
            </h4>

            <div className="flex flex-col gap-6">
              {/* WhatsApp block */}
              <div className="flex flex-col items-start">
                <a 
                  href="https://wa.me/919876543210" 
                  className="btn footer-cta bg-[#E63946] hover:bg-[#D90429] text-white shadow-lg hover:shadow-[#E63946]/30"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Phone Block */}
              <div className="flex flex-col items-start">
                <a 
                  href="tel:+919876543210" 
                  className="btn footer-cta border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white"
                >
                  Call Us
                </a>
              </div>

              {/* Address Block */}
              <div className="flex flex-col gap-1.5 mt-3">
                <p className="body-text text-[#A0A8B8]">
                  123 Main Road, Tambaram, Chennai 600045
                </p>
                <p className="text-xs text-[#A0A8B8] font-medium">
                  Opposite [Landmark] · 3 min from Tambaram Station
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Google Maps Embed Layout Constraints Implemented (min-h-400px desktop) */}
      <div className="w-full bg-[#16181C] relative border-y border-[#0B0C10]">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0B0C10] to-transparent z-10 pointer-events-none" />

        <div className="absolute top-10 left-0 w-full text-center z-20 pointer-events-none px-4">
          <h3 className="text-white font-extrabold text-xl md:text-2xl drop-shadow-lg mb-2 tracking-tight">
            {data.googleMapsEmbed.aboveEmbedLine}
          </h3>

        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124403.04758832049!2d80.124505!3d13.0645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b686314bf!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full min-h-[300px] lg:min-h-[450px] opacity-70 grayscale-[30%] hover:grayscale-0 hover:opacity-100 transition-all duration-700 pointer-events-auto"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={data.googleMapsEmbed.mapPinLabel}
        ></iframe>

        {/* SEO Text dynamically appended but hidden efficiently */}
        <div className="sr-only">
          {data.googleMapsEmbed.neighbourhoodSeoLine}
        </div>
      </div>

      {/* 4. Sub-Layout Footer Boundary (Legal Bar) */}
      <div className="w-full bg-[#0B0C10] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A0A8B8] text-xs font-semibold">
            {data.legalBar.copyrightText}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {data.legalBar.links.map((link, idx) => (
              <a key={idx} href="#" className="text-[#A0A8B8] text-xs hover:text-[#E63946] font-medium transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
