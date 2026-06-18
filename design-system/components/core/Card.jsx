import React from 'react';

/**
 * Card — content surface.
 * variant "light" = white, hairline border, lifts on hover.
 * variant "dark"  = translucent glass for forest-950 grounds (backdrop blur).
 * hoverable (default true) enables the lift/shadow interaction.
 */
export function Card({ children, variant = 'light', hoverable = true, style = {}, ...rest }) {
  const variants = {
    light: {
      background: 'var(--white)',
      border: '1px solid var(--earth-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px',
      boxShadow: 'var(--shadow-sm)',
    },
    dark: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      color: 'var(--text-on-dark)',
    },
  };

  const onEnter = (e) => {
    if (!hoverable) return;
    if (variant === 'light') {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    } else {
      e.currentTarget.style.background = 'rgba(255,255,255,.08)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)';
    }
  };
  const onLeave = (e) => {
    if (!hoverable) return;
    if (variant === 'light') {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(0)';
    } else {
      e.currentTarget.style.background = 'rgba(255,255,255,.04)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
    }
  };

  return (
    <div
      style={{
        transition: 'box-shadow .3s ease, transform .2s var(--ease-out), background .3s ease, border-color .3s ease',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
