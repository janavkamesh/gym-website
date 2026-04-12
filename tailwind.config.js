/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Brand Colors
        brand: {
          primary: '#1A6B5A',     // Primary links and icons
          hover: '#2D9070',       // Interaction state for primary links
          dark: '#1C2326',        // Philosophy strip bg, 404 primary button
          darkHover: '#2D3748',   // 404 primary button hover
        },
        // Conversion Elements
        cta: {
          whatsapp: '#25D366',    // Main conversion button baseline
          hover: '#128C4E',       // Main conversion button hover state
        },
        // Specialized Section Accents
        accent: {
          saffron: '#E8863A',     // Highlighting / Subtitles
          guarantee: '#FDF3EC',   // Reassurance strip & Guarantee block background
          femaleFirst: '#F5EBF0', // Specialized callout background
        },
        // Structural Backgrounds
        surface: {
          base: '#FAFAF8',        // Global website background
          card: '#FFFFFF',        // Standard card and container surface
        },
        // Typography
        text: {
          heading: '#1C2326',     // H1, H2, H3, H4
          body: '#4A5568',        // Paragraphs and subtitles
        }
      },
      boxShadow: {
        // Empathetic UI Shadows (Mapped precisely from Task 4 RGBA logic)
        
        // Cards
        'card-base': '0 2px 8px rgba(26, 107, 90, 0.08)',         // Standard resting state
        'card-hover': '0 8px 24px rgba(26, 107, 90, 0.12)',       // Standard 1.02 scale lift
        'card-premium': '0 12px 32px rgba(26, 107, 90, 0.15)',    // Exaggerated lift for Premium pricing tier
        
        // Buttons
        'cta-hover': '0 8px 24px rgba(26, 107, 90, 0.14)',        // Standard WhatsApp hover
        'cta-heavy': '0 10px 25px rgba(37, 211, 102, 0.20)',      // Final CTA section heavy shadow
        'cta-secondary': '0 8px 20px rgba(37, 211, 102, 0.20)',   // 404 Page WhatsApp hover
      },
      transitionDuration: {
        '200': '200ms', // Enforcing the global "smooth and empathetic" rule
      },
      scale: {
        '98': '.98',    // Standardized active press state
        '102': '1.02',  // Standardized soft hover lift
      }
    },
  },
  plugins: [],
}
