import React, { AnchorHTMLAttributes } from 'react';

export interface WhatsAppButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function WhatsAppButton({ href, className = '', children, ...props }: WhatsAppButtonProps) {
  return (
    <a 
      href={href} 
      className={`bg-cta-whatsapp text-white rounded-full px-8 py-4 font-bold flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-cta-hover hover:scale-102 hover:shadow-cta-hover active:scale-98 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
