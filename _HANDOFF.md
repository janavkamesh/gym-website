🏗️ Aura Wellness: Master Developer Handoff Document
Project: Conversion-Focused Local Gym Website (Chennai, Tamil Nadu)

Tech Stack: Next.js + Tailwind CSS

Objective: Provide a strict 1:1 mapping of Design, Logic, and Content to prevent visual drift and hallucination during development.

🛠️ Sub-Task 5.1: Tailwind Configuration DNA
File Target: tailwind.config.js

Objective: Centralize all brand colors and custom interaction shadows so the code remains DRY and immune to visual drift.

1. The Tailwind Configuration File
Strict Rule: Do not use arbitrary hex codes in component files. E.g., text-[#1C2326] must be written as text-text-heading.

JavaScript
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
2. Developer Execution Rules & Expert Analysis
Semantic Naming over Literal Naming: If Aura Wellness rebrands to blue in the future, changing this one config file updates the entire site instantly.
Centralized Empathy (Shadows): Shadow rendering is highly prone to human error. By hardcoding rgba(26,107,90) tinted shadows, developers simply use shadow-card-hover. All card interactions must exclusively use shadow-card-hover and scale-102 triggered over a duration-200. Custom animations outside of this ecosystem are prohibited.
Context Isolation: The accent object isolates #FDF3EC (Guarantee) and #F5EBF0 (Female-First), preventing developers from accidentally using a pink background on a pricing table.

3. Data Verification Matrix
Token Name	Value	Explicit Source / Usage
Brand Primary	#1A6B5A	Trust Signals, Value Prop, Pricing, Final CTA
Brand Hover	#2D9070	Trust Signals, Value Prop, Pricing, Final CTA
Brand Dark	#1C2326	Philosophy Strip (Trainers), 404 Page Primary Button
Brand Dark Hover	#2D3748	404 Page Primary Button Hover
WhatsApp CTA	#25D366	Hero, Value Prop, Social Proof, How It Works, Trainers, Pricing, Final CTA
WhatsApp Hover	#128C4E	Hero, Value Prop, Social Proof, How It Works, Trainers, Pricing, Final CTA
Accent Saffron	#E8863A	Global Design System Reference
Accent Guarantee	#FDF3EC	How It Works, Pricing (Guarantee Block)
Accent Female-First	#F5EBF0	Value Prop, Trainer Profiles
Surface Base	#FAFAF8	Global Background Base, 404 Page Container
Surface Card	#FFFFFF	Global Card Surface
Text Heading	#1C2326	Global Text Headings
Text Body	#4A5568	Global Text Body
🧱 Sub-Task 5.2: Global Component Library
Instructions for Developer/AI: Before building individual sections, construct these base components. Pass dynamic content via React props (children, title, href, etc.).

Component Definitions
1. <WhatsAppButton /> (Primary Conversion Atom)

Purpose: The main conversion driver used across 80% of the site.

Base Classes: bg-cta-whatsapp text-white rounded-full px-8 py-4 font-bold flex items-center justify-center

Interaction Classes: transition-all duration-200 ease-in-out hover:bg-cta-hover hover:scale-102 hover:shadow-cta-hover active:scale-98

2. <StandardCard /> (Content Container Atom)

Purpose: The default wrapper for Value Props, Trainers, Steps, and Testimonials.

Base Classes: bg-surface-card rounded-xl p-6 shadow-card-base

Interaction Classes: transition-all duration-200 ease-in-out hover:scale-102 hover:shadow-card-hover

Exception Handling: If isPremium={true} is passed (for the Pricing section), append border-2 border-cta-whatsapp z-10 hover:-translate-y-2 hover:shadow-card-premium and remove hover:scale-102.

3. <SectionHeader /> (Typography Molecule)

Purpose: Standardizes spacing and sizing for section introductions to maintain visual rhythm.

Props & Classes:

Wrapper: flex flex-col gap-4 mb-12 (append items-center text-center if align="center").

Eyebrow (Optional): text-accent-saffron font-bold uppercase tracking-wider text-sm

Heading: text-text-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight

Subtitle (Optional): text-text-body text-base md:text-lg max-w-2xl

4. <SecondaryLink /> (Navigation Atom)

Purpose: Inline text links for "Read More" or "See Guarantee".

Base Classes: text-brand-primary font-semibold inline-flex items-center gap-2

Interaction Classes: transition-colors duration-200 ease-in-out hover:text-brand-hover hover:underline

Architect's Integration Note:
By defining these 4 components, you reduce the total amount of code the AI needs to generate by roughly 30%. Example implementation:

JavaScript
<StandardCard>
  <img src="/assets/aura-wellness-womens-fitness-lounge-chennai.webp" alt="Private Lounge" />
  <h3>Private Lounge</h3>
  <p>...</p>
</StandardCard>
🗺️ Sub-Task 5.3: Section-by-Section Assembly Map
Objective: Provide a strict mapping of Visuals, Content, and Responsive Logic to prevent "creative liberties" during assembly.

Main Landing Page
Assembly Order	Component Name	Visual Reference	Content Source	Core UX Logic
00	Navbar (Global)	image_1b08e0.png	[JSON: NavbarData]	Sticky top, z-50. CTA uses cta-whatsapp styles.
01	Hero Section	(Image Missing)	[JSON: HeroData]	Mobile: flex-col, min 85vh. Desktop: min 90vh. Background image with bg-black/40 overlay.
02	Trust Signals	image_1b0c63.png	[JSON: TrustData]	Grid: cols-1 → md:cols-2 → lg:cols-4. Card hover: scale-102 + shadow-card-hover.
03	Value Proposition	image_1b097c.png	[JSON: ValuePropData]	Grid: cols-1 → lg:cols-3. Female-First block: flex-col → lg:flex-row. Community card absolute on desktop.
04	How It Works	image_1b0cde.png	[JSON: HowItWorksData]	Grid: cols-1 → lg:cols-3. Reassurance strip flex-col → md:flex-row. Primary CTA hover active.
05	Trainer Profiles	image_1b0fde.png	[JSON: TrainerData]	Grid: cols-1 → lg:cols-3. Philosophy strip: bg-brand-dark text-white. No hover on informational strips.
06	Social Proof	image_1b0ca2.png	[JSON: SocialProofData]	Grid: cols-1 → lg:cols-3. Video container max-w-4xl mx-auto. Video play button hover:scale-110.
07	Pricing Table	image_1b1020.png	[JSON: PricingData]	Grid: cols-1 → lg:cols-3. Premium card requires z-10, border-2 border-cta-whatsapp, and shadow-card-premium on hover.
08	Final CTA	image_1b1081.png	[JSON: FinalCTAData]	Persona cards: cols-1 → lg:cols-3. Photo strip MUST be overflow-x-auto snap-x on mobile → lg:grid-cols-3 on desktop.
09	Footer (Global)	image_1b093b.png	[JSON: FooterData]	Mobile: Stacked lists. Desktop: Multi-column grid. Standard text links with hover:text-brand-hover.
Separate Page Route
Assembly Order	Component Name	Visual Reference	Content Source	Core UX Logic
N/A	404 Not Found	image_1b10d9.png	[JSON: 404Data]	Full viewport min-h-screen. Buttons flex-col → md:flex-row. Primary button bg-brand-dark.
Expert Next Steps: This framework ensures the developer knows exactly where to look for the design, what text to insert, and how it should behave. The required JSON arrays (Task 2) should be fed to the AI contextually as each section is built.

🖼️ Sub-Task 5.4: Asset & SEO Manifest
File Target: /public/assets/ directory & React <img /> components.

Objective: Standardize file naming for optimal Google Image indexing, enforce next-gen formats for Core Web Vitals, and dictate precise alt tags.

1. Global Asset Mandates
Format: All images MUST be converted to .webp before being added to the repository. No heavy .png or .jpg files.

Sizing: Background images capped at 1920px width. Card/Profile images capped at 800px width.

Naming Convention Architecture: [brand]-[location]-[category]-[descriptive-keyword].webp (Search engines read file names. IMG_8492.jpg hurts SEO. aura-wellness-chennai-gym-interior.webp boosts local SEO).

Technical Implementation Notes:

Lazy Loading: Every image except the Hero Background must include the loading="lazy" attribute.

Hero Priority: The Hero Background image must use fetchpriority="high" to ensure instant Largest Contentful Paint (LCP) on mobile connections.

Icons/SVGs: Trust Signal icons and UI elements MUST be inline <svg> elements to prevent extra HTTP requests, using aria-hidden="true".

2. Section-by-Section Asset Map & Alt Text
Section	Required Asset	Strict File Name (.webp)	SEO & Accessibility alt Text
Hero	Main Background	aura-wellness-chennai-premium-gym-floor	"Wide view of the premium Aura Wellness gym floor in Chennai featuring modern equipment"
Value Prop	Female-First Image	aura-wellness-womens-fitness-lounge-chennai	"Private, safe women's fitness lounge at Aura Wellness in Anna Nagar"
Trainers	Trainer 1 (Karthik)	aura-wellness-trainer-karthik-profile	"Karthik, expert personal trainer at Aura Wellness Chennai"
Trainers	Trainer 2 (Priya)	aura-wellness-trainer-priya-profile	"Priya, certified female personal trainer at Aura Wellness Anna Nagar"
Trainers	Trainer 3 (Dinesh)	aura-wellness-trainer-dinesh-profile	"Dinesh, elite fitness and recovery coach in Chennai"
Trainers	Callout Image	aura-wellness-female-personal-training	"Female personal trainer guiding a workout session in our safe gym environment"
Social Proof	Member Result 1	aura-wellness-chennai-weight-loss-result-1	"Before and after fitness transformation of an Aura Wellness member"
Social Proof	Member Result 2	aura-wellness-chennai-muscle-gain-result-2	"90-day muscle gain and body transformation result from our Chennai gym"
Social Proof	Member Result 3	aura-wellness-chennai-fitness-result-3	"Successful fitness and health transformation at Aura Wellness Anna Nagar"
Social Proof	Video Thumbnail	aura-wellness-member-testimonial-video-cover	"Video testimonial from a successful Aura Wellness gym member"
Final CTA	Strip Photo 1	aura-wellness-gym-strength-equipment	"High-quality strength training equipment at our Anna Nagar facility"
Final CTA	Strip Photo 2	aura-wellness-gym-cardio-zone	"Spacious and clean cardio workout zone at Aura Wellness Chennai"
Final CTA	Strip Photo 3	aura-wellness-personal-training-session	"One-on-one personal training accountability session in progress"