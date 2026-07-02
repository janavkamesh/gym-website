import React from 'react';
import { CTAButton, CTAButtonProps } from './CTAButton';

export type WhatsAppButtonProps = CTAButtonProps;

export function WhatsAppButton(props: WhatsAppButtonProps) {
  return <CTAButton {...props} />;
}
