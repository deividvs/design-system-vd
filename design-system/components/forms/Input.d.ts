import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text rendered below the input. */
  hint?: string;
  /** Leading icon node inside the field. */
  iconLeft?: React.ReactNode;
  /** Style applied to the outer wrapper. */
  wrapperStyle?: React.CSSProperties;
}

/** Text input with label, optional leading icon, and forest focus ring. */
export function Input(props: InputProps): JSX.Element;
