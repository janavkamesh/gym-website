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

                // Sections
                'top-glow': '0 -15px 40px -10px rgba(230, 57, 70, 0.15)', // Subtle upward red glow for scroll layers
            },
            transitionDuration: {
                '200': '200ms', // Enforcing the global "smooth and empathetic" rule
            },
            scale: {
                '98': '.98',    // Standardized active press state
                '102': '1.02',  // Standardized soft hover lift
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-out': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0', visibility: 'hidden' },
                },
                'pulse-slow': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.8' },
                },
                'fade-in': {
                    '0%': { opacity: '0.15' },
                    '100%': { opacity: '1' },
                },
                'fade-in-down': {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 1s ease-out forwards',
                'fade-in-down': 'fade-in-down 1s ease-out forwards',
                'fade-out': 'fade-out 0.5s ease-out forwards',
                'fade-in': 'fade-in 2s ease-in-out forwards',
                'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slow-mo-enter': 'fade-in-up 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            }
        },
    },
    plugins: [],
}
