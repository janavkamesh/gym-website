import React, { AnchorHTMLAttributes } from 'react';

export interface SecondaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function SecondaryLink({ href, className = '', children, ...props }: SecondaryLinkProps) {
  return (
    <a 
      href={href} 
      className={`text-brand-primary font-semibold inline-flex items-center gap-2 transition-colors duration-200 ease-in-out hover:text-brand-hover hover:underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
