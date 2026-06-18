import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size. Default "md". */
  size?: 'md' | 'lg' | 'xl';
  /** Stretch to fill its container. */
  fullWidth?: boolean;
  /** Optional icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Optional icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Element/tag to render as (e.g. "a"). Default "button". */
  as?: any;
  children?: React.ReactNode;
}

/**
 * Primary action button for Victor Darido / SGF surfaces.
 * @startingPoint section="Core" subtitle="Amber, forest & ghost buttons" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
