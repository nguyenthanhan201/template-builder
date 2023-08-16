import { ReactNode } from 'react';
export interface BadgeProps {
  type?: 'dot' | 'text';
  className?: string;
  value?: string;
  children?: ReactNode;
  badgeClassName?: string;
}
