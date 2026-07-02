import React, { AnchorHTMLAttributes } from 'react';

export interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function CTAButton({ href, className = '', children, ...props }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`btn gap-2 bg-brand-primary text-white hover:bg-brand-hover hover:shadow-[0_4px_14px_rgba(230,57,70,0.12)] hover:-translate-y-0.5 active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.06)] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
