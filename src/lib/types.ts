import { ChangeEvent, FocusEventHandler, KeyboardEventHandler } from 'react';

export type Variants = 'primary' | 'positive' | 'negative' | 'secondary' | 'blank' | 'link';

export type Size = 'lg' | 'md' | 'sm';

export type Colors = 'default' | 'success' | 'error' | 'warning' | 'information';

export type FieldState =
  | 'default'
  | 'hover'
  | 'focused'
  | 'error'
  | 'active'
  | 'read-only'
  | 'read-only-focused'
  | 'disabled'
  | 'success'
  | 'warning';

export interface BaseControlProps<T extends string> {
  value: T;
  name: string;
  onChange: ChangeEvent;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onKeyDown?: KeyboardEventHandler;
}

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}
