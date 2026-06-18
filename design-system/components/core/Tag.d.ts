import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. Default "light". */
  tone?: 'light' | 'amber' | 'dark' | 'danger';
  /** Optional icon node before the label. */
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
}

/** Uppercase eyebrow / pill label. */
export function Tag(props: TagProps): JSX.Element;
