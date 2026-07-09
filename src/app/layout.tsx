import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavigation from '@/components/sections/HeaderNavigation';
import Footer from '@/components/sections/Footer';
import StickyWhatsAppButton from '@/components/sections/StickyWhatsAppButton';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import Preloader from '@/components/ui/Preloader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Fitness — Gym in Chennai | Strength, Weight Loss & Personal Training",
  description: "Power Fitness is Chennai's neighborhood gym offering Strength Training, Weight Loss programs, CrossFit, Zumba and Personal Training. Certified trainers, transparent pricing, free first day trial. Join us today.",
  metadataBase: new URL("https://powerfitnessgym.vercel.app"),
  alternates: {
    canonical: "https://powerfitnessgym.vercel.app",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "https://powerfitnessgym.vercel.app",
    siteName: "Power Fitness",
    title: "Power Fitness — Gym in Chennai | Strength, Weight Loss & Personal Training",
    description: "Chennai's neighborhood gym with certified trainers, transparent pricing, and real results. Strength Training, Weight Loss, CrossFit, Zumba and Personal Training. Free first day trial.",
    images: [
      {
        url: "https://powerfitnessgym.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Power Fitness Gym — Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Fitness — Gym in Chennai | Strength, Weight Loss & Personal Training",
    description: "Chennai's neighborhood gym with certified trainers, transparent pricing, and real results. Free first day trial.",
    images: ["https://powerfitnessgym.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "gym in Chennai",
    "fitness studio Chennai",
    "strength training Chennai",
    "weight loss gym Chennai",
    "personal training Chennai",
    "CrossFit Chennai",
    "Zumba Chennai",
    "Power Fitness",
  ],
  authors: [
    {
      name: "Janav Kamesh",
      url: "https://janavkamesh.com",
    },
  ],
  creator: "Janav Kamesh",
  verification: {
    google: "ZXPymU06kpne5xBnTbb1zkcGO-BBmy8rVOACG4SnzAY",
  },
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
        <Preloader />
        <div 
          className="animate-slow-mo-enter flex-grow flex flex-col"
          style={{ animationFillMode: 'both', animationDelay: '1.5s' }}
        >
          <SmoothScrollProvider>
            <HeaderNavigation />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </div>
        <StickyWhatsAppButton />
      </body>
    </html>
  );
}
