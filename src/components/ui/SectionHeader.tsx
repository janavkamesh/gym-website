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
        <span className="eyebrow-label">
          {eyebrow}
        </span>
      )}
      
      <h2 className="section-heading text-white">
        {heading}
      </h2>
      
      {/* Action-Oriented subtext boundary */}
      {subtitle && (
        <p className="body-text text-inherit opacity-90 max-w-2xl mt-1.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
