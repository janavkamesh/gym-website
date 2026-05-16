import React, { AnchorHTMLAttributes } from 'react';

export interface WhatsAppButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  glow?: boolean;
}

export function WhatsAppButton({ href, className = '', glow = false, children, ...props }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'btn-shimmer',
        'bg-brand-primary text-brand-dark font-extrabold',
        'rounded-full px-8 py-4',
        'flex items-center justify-center gap-2',
        'transition-all duration-300 ease-out',
        'hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-cta-hover',
        'active:scale-98',
        glow ? 'animate-cta-glow' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </a>
  );
}

export default WhatsAppButton;
