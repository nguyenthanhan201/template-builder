import clsx from 'clsx';

import { getIconClasses, getIconPath } from './helper';
import { IconProps } from './types';

export default function Icon(props: IconProps) {
  const {
    iconName,
    color,
    variant = 'solid',
    size = 24,
    className,
    viewBox = '0 0 24 24',
    ...restProps
  } = props;
  const path = getIconPath(iconName, variant);
  const classes = getIconClasses(color);
  return (
    <span className={clsx(classes, className)}>
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill={variant === 'outline' ? 'none' : 'currentColor'}
        {...restProps}
      >
        {path}
      </svg>
    </span>
  );
}
