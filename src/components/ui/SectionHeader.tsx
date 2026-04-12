import React, { HTMLAttributes, ReactNode } from 'react';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({ heading, eyebrow, subtitle, align = 'left', className = '', ...props }: SectionHeaderProps) {
  const wrapperClasses = `flex flex-col gap-4 mb-12 ${align === 'center' ? 'items-center text-center' : ''}`;

  return (
    <div className={`${wrapperClasses} ${className}`} {...props}>
      {eyebrow && (
        <span className="text-accent-saffron font-bold uppercase tracking-wider text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-text-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        {heading}
      </h2>
      {subtitle && (
        <p className="text-text-body text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
