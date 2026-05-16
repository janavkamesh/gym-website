'use client';
import React, { useRef, useEffect, useState } from 'react';

type AnimVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeIn'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'staggerChild';

interface AnimateProps {
  children: React.ReactNode;
  variant?: AnimVariant;
  delay?: number;    // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

// Spring-like expo ease-out — feels natural and athletic
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

const variantStyles: Record<AnimVariant, { hidden: string; visible: string }> = {
  fadeUp: {
    hidden:  'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden:  'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    hidden:  'opacity-0',
    visible: 'opacity-100',
  },
  slideLeft: {
    hidden:  'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  slideRight: {
    hidden:  'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  scaleUp: {
    hidden:  'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  staggerChild: {
    hidden:  'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
};

export function Animate({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 650,
  threshold = 0.10,
  className = '',
  as: Tag = 'div',
}: AnimateProps) {
  const ref = useRef<HTMLElement | null>(null);
  // One-shot: once triggered, stays visible — elements don't re-hide on scroll-up
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          observer.disconnect(); // clean up after first trigger
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, hasTriggered]);

  const { hidden, visible } = variantStyles[variant];

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`
        will-change-transform
        ${hasTriggered ? visible : hidden}
        ${className}
      `}
      style={{
        transition: `opacity ${duration}ms ${EASING}, transform ${duration}ms ${EASING}`,
        transitionDelay: hasTriggered ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}

export default Animate;
