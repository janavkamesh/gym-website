import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderNavigation from '@/components/sections/HeaderNavigation';
import Footer from '@/components/sections/Footer';
import StickyWhatsAppButton from '@/components/sections/StickyWhatsAppButton';
import MobileCTABar from '@/components/sections/MobileCTABar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gym-website-six-inky.vercel.app"),
  title: "Best Gym in Chennai | Aura Wellness — Free 1-Day Trial",
  description:
    "Aura Wellness is Chennai's most transparent gym in Anna Nagar. Real pricing, certified trainers, 90-day money-back guarantee. Join 1,200+ members. Free 1-day trial.",
  keywords: [
    "best gym in Chennai",
    "gym Anna Nagar",
    "Chennai fitness centre",
    "weight loss gym Chennai",
    "personal trainer Chennai",
    "Aura Wellness Chennai",
  ],
  openGraph: {
    title: "Best Gym in Chennai | Aura Wellness — Free 1-Day Trial",
    description:
      "Real pricing, certified trainers, 90-day money-back guarantee. Join 1,200+ members at Chennai's most trusted gym in Anna Nagar. Claim your free 1-day trial.",
    url: "https://gym-website-six-inky.vercel.app",
    siteName: "Aura Wellness Chennai",
    images: [
      {
        url: "/assets/aura-wellness-chennai-premium-gym-floor.webp",
        width: 1200,
        height: 630,
        alt: "Aura Wellness gym floor in Anna Nagar, Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gym in Chennai | Aura Wellness — Free 1-Day Trial",
    description:
      "Real pricing, certified trainers, 90-day money-back guarantee. Join 1,200+ members. Free 1-day trial.",
    images: ["/assets/aura-wellness-chennai-premium-gym-floor.webp"],
  },
  alternates: {
    canonical: "https://gym-website-six-inky.vercel.app",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Aura Wellness",
  description:
    "Chennai's most transparent gym in Anna Nagar. Certified trainers, real pricing, 90-day money-back guarantee.",
  url: "https://gym-website-six-inky.vercel.app",
  telephone: "+91-98765-43210",
  email: "info@aurawellnesschennai.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, Kavitha Street, Anna Nagar West",
    addressLocality: "Anna Nagar",
    addressRegion: "Chennai",
    postalCode: "600040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0878,
    longitude: 80.21,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "13:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "320",
    bestRating: "5",
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Female-Only Section", value: true },
    { "@type": "LocationFeatureSpecification", name: "Personal Training", value: true },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is parking available at Aura Wellness Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we have dedicated, secure parking on-site for all Aura Wellness members.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during my 1-day free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get full access to the floor, exactly like a paying member. One of our trainers will show you around, but there is zero pressure to buy.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pause my membership if I travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can pause your membership for up to 30 days every year without any penalty or hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be fit to join Aura Wellness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Over 80% of our members started as beginners. We build programs tailored entirely to your starting point.",
      },
    },
    {
      "@type": "Question",
      name: "Are personal trainers included in the membership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every new member gets a complimentary 1-on-1 strategy session. Continued dedicated coaching is available in the Premium Training plan.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip to main content — WCAG 2.4.1 */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-bold focus:text-sm"
        >
          Skip to main content
        </a>

        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <HeaderNavigation />
        <main id="main-content" className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <StickyWhatsAppButton />
        <MobileCTABar />
      </body>
    </html>
  );
}
