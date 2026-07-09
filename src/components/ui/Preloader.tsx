"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The loading screen will be visible for exactly 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface-base transition-opacity duration-500 animate-fade-out" style={{ animationDelay: '1.5s' }}>
      <div className="flex flex-col items-center justify-center animate-fade-in">
        <img
          src="/icon.png"
          alt="Power Fitness Logo"
          className="w-20 h-20 sm:w-28 sm:h-28 mb-1 object-contain animate-pulse-slow"
        />
        <h1 className="text-white text-sm md:text-base font-extrabold tracking-tight">
          Power Fitness
        </h1>
      </div>
    </div>
  );
}
