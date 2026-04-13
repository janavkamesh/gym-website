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
    <footer className="w-full relative z-40 bg-brand-dark mt-auto overflow-hidden">
       {/* 1. Pre Footer Strip aligned to Female-First warm tones */}
       <div className="w-full bg-black py-8 text-center px-4 shadow-sm border-y border-brand-primary/10">
         <p className="text-white font-extrabold uppercase tracking-[0.15em] text-xs md:text-sm">
            {data.preFooterTrustStrip.stripCopy}
         </p>
       </div>

       {/* 2. Primary 4-Col Integration Grid */}
       <div className="w-full max-w-7xl mx-auto pt-20 pb-16 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            
            {/* Column 1: Core Platform Identification */}
            <div className="flex flex-col">
              <h4 className="text-white text-2xl tracking-tight font-extrabold mb-6">
                {data.primaryFooterGrid.columnAbout.heading}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                {data.primaryFooterGrid.columnAbout.body}
              </p>
              <p className="text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border-l-2 border-brand-primary pl-3">
                {data.primaryFooterGrid.columnAbout.socialProofMicroLine}
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <a href="#" className="hover:text-white transition-colors" aria-label={data.primaryFooterGrid.columnAbout.socialMediaLinks.instagram.action}><InstaSVG /></a>
                <a href="#" className="hover:text-white transition-colors" aria-label={data.primaryFooterGrid.columnAbout.socialMediaLinks.facebook.action}><FBSVG /></a>
                <a href="#" className="hover:text-white transition-colors" aria-label={data.primaryFooterGrid.columnAbout.socialMediaLinks.youtube.action}><YouTubeSVG /></a>
              </div>
            </div>

            {/* Column 2: Navigation Layer */}
            <div className="flex flex-col lg:pl-6">
              <h4 className="text-white text-base font-extrabold tracking-wide mb-6 uppercase">
                {data.primaryFooterGrid.columnNavigate.heading}
              </h4>
              <ul className="flex flex-col gap-3.5 mt-1">
                <li><a href="#home" className="text-sm tracking-wide transition-colors text-gray-400 hover:text-white font-medium">Home</a></li>
                <li><a href="#services" className="text-sm tracking-wide transition-colors text-gray-400 hover:text-white font-medium">Services</a></li>
                <li><a href="#booking" className="text-sm tracking-wide transition-colors text-brand-primary font-bold hover:text-white">Pricing</a></li>
                <li><a href="#transform" className="text-sm tracking-wide transition-colors text-gray-400 hover:text-white font-medium">Transform</a></li>
              </ul>
            </div>

            {/* Column 3: Hours Protocol */}
            <div className="flex flex-col">
              <h4 className="text-white text-base font-extrabold tracking-wide mb-6 uppercase">
                {data.primaryFooterGrid.columnOperatingHours.heading}
              </h4>
              <ul className="flex flex-col gap-3 mb-8">
                {data.primaryFooterGrid.columnOperatingHours.hours.map((h, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm border-b border-gray-800/80 pb-2.5 font-medium text-gray-400">
                    <span>{h.days}</span>
                    <span className="text-gray-300 font-mono text-xs">{h.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50">
                <p className="text-brand-primary text-xs uppercase tracking-widest font-bold mb-2">
                  {data.primaryFooterGrid.columnOperatingHours.whatsAppAvailabilityLine}
                </p>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">
                  {data.primaryFooterGrid.columnOperatingHours.afterHoursReassurance}
                </p>
              </div>
            </div>

            {/* Column 4: Full Pipeline Contact Output */}
            <div className="flex flex-col">
              <h4 className="text-white text-base font-extrabold tracking-wide mb-6 uppercase">
                {data.primaryFooterGrid.columnContact.heading}
              </h4>

              <div className="flex flex-col gap-6">
                 {/* WhatsApp block */}
                 <div className="flex flex-col items-start gap-1">
                   <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-[0.2em]">{data.primaryFooterGrid.columnContact.whatsAppBlock.label}</span>
                   <a href="#" className="text-white font-bold hover:text-brand-primary transition-colors text-sm underline underline-offset-4 decoration-brand-primary/30">
                     {data.primaryFooterGrid.columnContact.whatsAppBlock.buttonLabel}
                   </a>
                   <span className="text-xs text-gray-400 mt-1">{data.primaryFooterGrid.columnContact.whatsAppBlock.belowButtonMicroLine}</span>
                 </div>

                 {/* Phone Block */}
                 <div className="flex flex-col items-start gap-1">
                   <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-[0.2em]">{data.primaryFooterGrid.columnContact.phoneBlock.label}</span>
                   <a href="tel:+919876543210" className="text-white font-bold font-mono hover:text-brand-primary transition-colors text-sm tracking-wide">
                     {data.primaryFooterGrid.columnContact.phoneBlock.displayLabel}
                   </a>
                   <span className="text-xs text-brand-primary opacity-80 mt-1 leading-snug">{data.primaryFooterGrid.columnContact.phoneBlock.subLabel}</span>
                 </div>

                 {/* Physical Location Address Base Block */}
                 <div className="flex flex-col items-start gap-1 mt-2 p-4 bg-gray-900 rounded-lg border border-gray-800">
                   <span className="text-[10px] text-brand-primary font-extrabold uppercase tracking-[0.2em] mb-1.5">{data.primaryFooterGrid.columnContact.physicalAddressBlock.label}</span>
                   <p className="text-sm text-gray-300 font-medium leading-relaxed mb-3">
                     {data.primaryFooterGrid.columnContact.physicalAddressBlock.address}
                   </p>
                   <ul className="text-xs text-gray-500 flex flex-col gap-1.5 list-disc pl-4 font-medium marker:text-gray-700">
                     <li>{data.primaryFooterGrid.columnContact.physicalAddressBlock.parkingNote}</li>
                     <li>{data.primaryFooterGrid.columnContact.physicalAddressBlock.landmarkNote}</li>
                   </ul>
                 </div>
              </div>
            </div>
         </div>
       </div>

       {/* 3. Google Maps Embed Layout Constraints Implemented (min-h-400px desktop) */}
       <div className="w-full bg-gray-950 relative border-y border-gray-800">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none" />
          
          <div className="absolute top-10 left-0 w-full text-center z-20 pointer-events-none px-4">
             <p className="text-white font-extrabold text-xl md:text-2xl drop-shadow-lg mb-2 tracking-tight">
               {data.googleMapsEmbed.aboveEmbedLine}
             </p>

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
       <div className="w-full bg-black py-6 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-500 text-xs font-semibold">
             {data.legalBar.copyrightText}
           </p>
           <div className="flex flex-wrap items-center justify-center gap-6">
             {data.legalBar.links.map((link, idx) => (
                <a key={idx} href="#" className="text-gray-500 text-xs hover:text-white font-medium transition-colors">
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
