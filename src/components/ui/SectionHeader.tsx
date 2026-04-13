import React, { HTMLAttributes, ReactNode } from 'react';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({ heading, eyebrow, subtitle, align = 'left', className = '', ...props }: SectionHeaderProps) {
  // Hardcoded visual spacing mb-12 to ensure universal bottom margins across all components
  const wrapperClasses = `flex flex-col gap-3 mb-12 ${align === 'center' ? 'items-center text-center' : ''}`;

  return (
    <div className={`${wrapperClasses} ${className}`} {...props}>
      {/* Informational subtle tracking constraint */}
      {eyebrow && (
        <span className="text-brand-primary font-extrabold uppercase tracking-widest text-xs">
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-inherit text-xl md:text-2xl lg:text-3xl font-black leading-tight">
        {heading}
      </h2>
      
      {/* Action-Oriented subtext boundary */}
      {subtitle && (
        <p className="text-inherit opacity-90 text-sm md:text-base max-w-2xl font-medium mt-1.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
