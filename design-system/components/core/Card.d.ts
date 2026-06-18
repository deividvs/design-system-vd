import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "light" white surface (default) or "dark" translucent glass for dark grounds. */
  variant?: 'light' | 'dark';
  /** Enable hover lift / shadow. Default true. */
  hoverable?: boolean;
  children?: React.ReactNode;
}

/**
 * Content surface card.
 * @startingPoint section="Core" subtitle="Light & dark-glass content cards" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
