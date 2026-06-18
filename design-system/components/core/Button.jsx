import React from 'react';

/**
 * Button — Victor Darido / SGF primary action.
 *
 * variant:
 *   "primary"   amber money-gradient on forest ink (marketing CTA)
 *   "secondary" forest gradient on white (in-app / app actions)
 *   "ghost"     transparent with hairline ring (use on dark grounds)
 * size: "md" | "lg" | "xl"   ·   fullWidth stretches to container
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    md: { fontSize: '15px', padding: '14px 24px', minHeight: '48px' },
    lg: { fontSize: '16px', padding: '16px 28px', minHeight: '52px' },
    xl: { fontSize: '18px', padding: '20px 36px', minHeight: '56px' },
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--amber-400) 0%, var(--amber-500) 100%)',
      color: 'var(--forest-950)',
      boxShadow: '0 2px 12px rgba(212,160,23,.25)',
    },
    secondary: {
      background: 'linear-gradient(135deg, var(--forest-600) 0%, var(--forest-800) 100%)',
      color: 'var(--white)',
      boxShadow: '0 2px 12px rgba(14,159,110,.25)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--white)',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,.25)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    letterSpacing: '0.02em',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    textDecoration: 'none',
    width: fullWidth ? '100%' : undefined,
    transition: 'transform .15s var(--ease-spring), box-shadow .3s ease',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const Tag = as;
  return (
    <Tag
      style={base}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
