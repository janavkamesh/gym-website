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
  delay?: number;       // ms
  duration?: number;    // ms
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

const variantStyles: Record<AnimVariant, { hidden: string; visible: string }> = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  slideLeft: {
    hidden: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  slideRight: {
    hidden: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  staggerChild: {
    hidden: 'opacity-0 translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
};

export function Animate({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className = '',
  as: Tag = 'div',
}: AnimateProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { hidden, visible } = variantStyles[variant];

  return (
    <Tag
      ref={ref as any}
      className={`
        transition-all ease-out will-change-transform
        ${inView ? visible : hidden}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}

export default Animate;
