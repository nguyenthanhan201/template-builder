import clsx from 'clsx';

import { Colors } from '@/lib/types';

import { ICONS } from './icons';
import { IconName, IconVariant } from './types';

const ICON_CLASSES = {
  default: 'icon-color-default',
  success: 'icon-color-success',
  warning: 'icon-color-warning',
  error: 'icon-color-error',
  information: 'icon-color-information',
};

function getIconPath(iconName: IconName, variant: IconVariant) {
  return ICONS[iconName][variant] ?? null;
}

function getIconClasses(color?: Colors) {
  return clsx('icon', color ? ICON_CLASSES[color] : null);
}

export { getIconClasses, getIconPath };
