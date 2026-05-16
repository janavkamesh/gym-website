import React, { HTMLAttributes } from 'react';

export interface StandardCardProps extends HTMLAttributes<HTMLDivElement> {
  isPremium?: boolean;
}

export function StandardCard({ isPremium = false, className = '', children, ...props }: StandardCardProps) {
  const base = 'bg-surface-card rounded-2xl p-6 shadow-card-base transition-all duration-300 ease-out';
  const interaction = isPremium
    ? 'border-2 border-brand-primary z-10 hover:-translate-y-2 hover:shadow-card-premium hover:shadow-amber-glow'
    : 'border border-white/5 hover:-translate-y-1 hover:shadow-card-hover';

  return (
    <div className={`${base} ${interaction} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default StandardCard;
