import React from 'react';

/**
 * Tag — uppercase eyebrow / pill label.
 * tone: "light" (forest on cream), "amber" (money), "dark" (forest accent on dark ground).
 */
export function Tag({ children, tone = 'light', iconLeft = null, style = {}, ...rest }) {
  const tones = {
    light: { color: 'var(--forest-700)', background: 'var(--forest-50)', border: '1px solid var(--forest-100)' },
    amber: { color: 'var(--amber-600)', background: 'var(--amber-50)', border: '1px solid var(--amber-100)' },
    dark:  { color: 'var(--forest-400)', background: 'rgba(14,159,110,.1)', border: '1px solid rgba(14,159,110,.25)' },
    danger:{ color: 'var(--danger)', background: 'var(--danger-bg)', border: '1px solid var(--danger-border)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        padding: '6px 16px',
        borderRadius: 'var(--radius-full)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
    </span>
  );
}
