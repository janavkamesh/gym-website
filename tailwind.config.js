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
          primary: '#E63946',     // Vibrant Red for links and icons
          hover: '#D90429',       // Deep Red for hover states
          dark: '#111111',        // Black section bg
          darkHover: '#000000',   // Pure Black hover
        },
        // Conversion Elements
        cta: {
          whatsapp: '#E63946',    // Main conversion button baseline (now strict red)
          hover: '#D90429',       // Main conversion button hover state (dark red)
        },
        // Structural Backgrounds
        surface: {
          base: '#111111',        // Global website background (Black)
          card: '#1F1F1F',        // Standard card and container surface (Dark Gray)
        },
        // Typography
        text: {
          heading: '#FFFFFF',     // H1, H2, H3, H4
          body: '#D1D5DB',        // Paragraphs and subtitles
        }
      },
      boxShadow: {
        // Empathetic UI Shadows (Mapped precisely from Task 4 RGBA logic)
        
        // Cards (using Red accent for shadow tint)
        'card-base': '0 2px 8px rgba(230, 57, 70, 0.08)',         // Standard resting state
        'card-hover': '0 8px 24px rgba(230, 57, 70, 0.12)',       // Standard 1.02 scale lift
        'card-premium': '0 12px 32px rgba(230, 57, 70, 0.15)',    // Exaggerated lift for Premium pricing tier
        
        // Buttons
        'cta-hover': '0 8px 24px rgba(230, 57, 70, 0.14)',        // Standard CTA hover
        'cta-heavy': '0 10px 25px rgba(230, 57, 70, 0.20)',      // Final CTA section heavy shadow
        'cta-secondary': '0 8px 20px rgba(230, 57, 70, 0.20)',   // 404 Page WhatsApp hover
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
