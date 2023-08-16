import { ComponentPropsWithRef } from 'react';

import { Colors } from '@/lib/types';

import { ICONS } from './icons';

export type IconName = keyof typeof ICONS;
export type IconVariant = 'solid' | 'outline';

export interface IconProps extends ComponentPropsWithRef<'svg'> {
  iconName: IconName;
  variant?: IconVariant;
  size?: number;
  color?: Colors;
  viewBox?: string;
}
