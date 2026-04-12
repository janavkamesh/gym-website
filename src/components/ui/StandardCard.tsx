import React, { HTMLAttributes } from 'react';

export interface StandardCardProps extends HTMLAttributes<HTMLDivElement> {
  isPremium?: boolean;
}

export function StandardCard({ isPremium = false, className = '', children, ...props }: StandardCardProps) {
  const baseClasses = 'bg-surface-card rounded-xl p-6 shadow-card-base transition-all duration-200 ease-in-out';
  const interactionClasses = isPremium 
    ? 'border-2 border-cta-whatsapp z-10 hover:-translate-y-2 hover:shadow-card-premium' 
    : 'hover:scale-102 hover:shadow-card-hover';

  return (
    <div 
      className={`${baseClasses} ${interactionClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
