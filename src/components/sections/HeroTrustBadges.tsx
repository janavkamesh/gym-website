"use client";

import React, { useEffect, useState } from 'react';

const stats = [
  { endValue: 4.8, isDecimal: true, suffix: '', label: 'Google Rating' },
  { endValue: 12, isDecimal: false, suffix: '', label: 'Years Running' },
  { endValue: 100, isDecimal: false, suffix: '+', label: 'Members Trained' },
];

function Counter({ endValue, duration, delay, isDecimal = false, suffix = '' }: { endValue: number, duration: number, delay: number, isDecimal?: boolean, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime - delay;

      if (progress < 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const percentage = Math.min(progress / duration, 1);
      // easeOutExpo
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      setCount(easeProgress * endValue);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, delay]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function HeroTrustBadges() {
  return (
    <div className="trust-strip">
      {stats.map((stat, idx) => (
        <div key={idx} className="trust-stat">
          <span className="trust-number">
            <Counter
              endValue={stat.endValue}
              isDecimal={stat.isDecimal}
              suffix={stat.suffix}
              delay={2600}
              duration={2000}
            />
          </span>
          <span className="trust-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroTrustBadges;
