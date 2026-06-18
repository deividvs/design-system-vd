import * as React from 'react';

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. Default "forest". */
  tone?: 'forest' | 'amber' | 'solid' | 'danger' | 'dark';
  /** Circle diameter in px. Default 48. */
  size?: number;
  /** A line icon (Lucide-style svg) inheriting currentColor. */
  children?: React.ReactNode;
}

/** Circular badge for a line icon. */
export function IconBadge(props: IconBadgeProps): JSX.Element;
