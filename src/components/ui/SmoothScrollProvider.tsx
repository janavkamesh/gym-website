'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, // Lower lerp means smoother, more momentum (extra pixels)
        duration: 1.5, // 1.5s duration for that extra premium 'extra 1s' feel
        smoothWheel: true, 
        // smoothTouch: true, // Specifically enabling for all mobile versions as requested
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollProvider;
