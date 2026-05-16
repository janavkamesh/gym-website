'use client';

import React, { useRef, useEffect, useState } from 'react';

// ── Animated counter hook ──────────────────────────────────────────────
function useCountUp(end: number, duration: number, triggered: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(easeOut(progress) * end));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };
    requestAnimationFrame(step);
  }, [triggered, end, duration]);
  return value;
}

// ── Individual stat tile ───────────────────────────────────────────────
function StatTile({
  icon,
  prefix,
  count,
  suffix,
  label,
  triggered,
  duration = 1800,
  isStatic,
  staticLabel,
}: {
  icon: React.ReactNode;
  prefix?: string;
  count?: number;
  suffix?: string;
  label: string;
  triggered: boolean;
  duration?: number;
  isStatic?: boolean;
  staticLabel?: string;
}) {
  const animated = useCountUp(count ?? 0, duration, triggered && !isStatic);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      {/* Icon circle */}
      <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-1">
        {icon}
      </div>
      {/* Number */}
      <div className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
        {isStatic ? staticLabel : (
          <>
            {prefix}<span className="text-gradient-amber">{animated.toLocaleString()}</span>{suffix}
          </>
        )}
      </div>
      {/* Label */}
      <p className="text-text-body text-sm font-semibold leading-snug max-w-[140px]">
        {label}
      </p>
    </div>
  );
}

// ── Marquee content ────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
  '⭐ 4.8 Google Rating',
  '1,200+ Members',
  'Since 2014',
  'Anna Nagar, Chennai',
  '90-Day Guarantee',
  'Female Trainers',
  'Free 1-Day Trial',
  '⭐ 4.8 Google Rating',
  '1,200+ Members',
  'Since 2014',
  'Anna Nagar, Chennai',
  '90-Day Guarantee',
  'Female Trainers',
  'Free 1-Day Trial',
];

// ── SVG Icons ─────────────────────────────────────────────────────────
const StarSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-brand-primary">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CalendarSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CommunitySVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ShieldSVG = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

// ── Main component ─────────────────────────────────────────────────────
export function TrustSignals() {
  const ref = useRef<HTMLElement | null>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref as React.Ref<HTMLElement>} className="relative w-full z-20 overflow-hidden">

      {/* ── Desktop / tablet: 4-stat grid ───────────────────────────── */}
      <div className="hidden sm:block w-full bg-surface-card border-y border-white/5">
        {/* Amber gradient top border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 justify-items-center">

            <StatTile
              icon={<StarSVG />}
              count={48}
              prefix=""
              suffix="★"
              label="Google Rating — 320+ Verified Reviews"
              triggered={triggered}
              duration={1600}
            />

            <StatTile
              icon={<CommunitySVG />}
              count={1200}
              suffix="+"
              label="Members Trained in Chennai"
              triggered={triggered}
              duration={2000}
            />

            <StatTile
              icon={<CalendarSVG />}
              isStatic
              staticLabel="2014"
              label="Serving Anna Nagar Since"
              triggered={triggered}
            />

            <StatTile
              icon={<ShieldSVG />}
              isStatic
              staticLabel="✓"
              label="Female Trainers & Dedicated Ladies Section"
              triggered={triggered}
            />

          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />
      </div>

      {/* ── Mobile: scrolling marquee ─────────────────────────────── */}
      <div className="sm:hidden w-full bg-brand-primary py-3 overflow-hidden marquee-container">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-brand-dark font-extrabold text-xs uppercase tracking-[0.12em] mx-6">
              {item}
              <span className="w-1 h-1 rounded-full bg-brand-dark/40 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

export default TrustSignals;
